import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebaseConfig";

export default function Reset() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    if (!email.trim()) {
      setError("❌ Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Reset link sent! Check your email inbox.");
      setEmail("");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to send reset email. Please check your address.");
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1">
          {/* Background Image */}
          <Image
            source={require("../assets/images/welcome.png")}
            className="absolute h-full w-full"
          />

          {/* Overlay */}
          <View className="flex-1 bg-black/40 justify-center px-6">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center", minHeight: 600 }}
              keyboardShouldPersistTaps="handled"
            >
              <View className="items-center">
                <Text className="text-white text-4xl font-bold mb-2 text-center">
                  RESET PASSWORD
                </Text>
                <Text className="text-gray-300 text-center mb-8">
                  Enter your email to receive reset link
                </Text>

                {/* Email Input */}
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="#ccc"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="w-full bg-white/10 text-white rounded-xl px-4 py-3 mb-4"
                />

                {/* Message / Error */}
                {message && (
                  <Text className="text-green-400 text-center mb-4">{message}</Text>
                )}
                {error && (
                  <Text className="text-rose-500 text-center mb-4">{error}</Text>
                )}

                {/* Send Reset Button */}
                <TouchableOpacity
                  onPress={handleReset}
                  className="bg-rose-500 py-3 rounded-xl w-full mb-4"
                >
                  <Text className="text-white text-center font-bold text-lg">
                    SEND RESET PASSWORD
                  </Text>
                </TouchableOpacity>

                {/* Back to Login */}
                <View className="flex-row justify-center">
                  <Text className="text-gray-300 mr-2">Remember your password?</Text>
                  <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text className="text-rose-500 font-bold">Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
