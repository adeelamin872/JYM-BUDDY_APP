import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{
          width: wp(100),
          height: hp(100),
          justifyContent: "flex-end",
          paddingBottom: 12,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wider">
            Best <Text className="text-rose-500">Workouts </Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wider">
            For you
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          style={{ alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center rounded-full border-[2px] border-neutral-200"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white text-center text-lg font-semibold"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
