import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebaseConfig";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("❌ Please enter email and password");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        setLoading(false);
        router.push("/home");
      } else {
        setError("❌ Please verify your email before logging in");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("❌ Invalid email or password");
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

          {/* Content overlay */}
          <View className="flex-1 bg-black/40 justify-center px-6">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', minHeight: 600 }} // 🔹 Centering content manually
              keyboardShouldPersistTaps="handled"
            >
              <View className="items-center">
                <Text className="text-white text-4xl font-bold mb-2">LOGIN</Text>
                <Text className="text-gray-300 text-center mb-8">Welcome back to Jym Buddy!</Text>

                {/* Email Input */}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#ccc"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="w-full bg-white/10 text-white rounded-xl px-4 py-3 mb-4"
                />

                {/* Password Input with Eye Toggle */}
                <View className="flex-row items-center bg-white/10 rounded-xl px-4 mb-2 w-full">
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    className="flex-1 text-white py-3"
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#ccc" />
                  </TouchableOpacity>
                </View>

                {/* Reset Password */}
                <View className="flex-row justify-end w-full mb-4">
                  <TouchableOpacity onPress={() => router.push("/reset")}>
                    <Text className="text-rose-500 text-lg font-semibold">Reset Password</Text>
                  </TouchableOpacity>
                </View>

                {/* Error Message */}
                {error && (
                  <Text className="text-rose-500 text-center mb-4">{error}</Text>
                )}

                {/* Login Button */}
                {loading ? (
                  <ActivityIndicator size="large" color="#f43f5e" className="mb-4" />
                ) : (
                  <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-rose-500 py-3 rounded-xl w-full mb-4"
                  >
                    <Text className="text-white font-bold text-lg text-center">Login</Text>
                  </TouchableOpacity>
                )}

                {/* Sign Up */}
                <View className="flex-row justify-center">
                  <Text className="text-gray-300 mr-2">Don't have an account?</Text>
                  <TouchableOpacity onPress={() => router.push("/signup")}>
                    <Text className="text-rose-500 font-bold">Sign Up</Text>
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
