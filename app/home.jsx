import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Imageslider from '../components/Imageslider';
import BodyParts from '../components/BodyParts';





export default function Home() {
  return (
   <SafeAreaView className="flex-1 bg-white space-y-5" edges={['top']}>
   <StatusBar style="dark"/>

   {/* punchline and avatar */}
   <View className="flex-row justify-between items-center mx-5">

        <View className="space-y-2">
           <Text style={{fontSize: hp(4.5), fontWeight: "700", color: "#404040", letterSpacing: 1}}>
            READY TO
           </Text>
           <Text style={{fontSize: hp(4.5), fontWeight: "700", color: "#f43f5e", letterSpacing: 1}}>
            WORKOUT
           </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
            <Image source ={require("../assets/images/avatar.png")}
            style={{height:hp(6) , width:hp(6)}}
            className="rounded-full" />
            <View className ="bg-neutral-200 rounded-full flex justify-center items-center border-(3px) border-neutral-300" 
            style={{height:hp(5.5), width:hp(5.5)}}>
            <Ionicons name='notifications' size={hp(3.5)} color='grey' />

            </View>

        </View>
   </View>

   {/* image slider */}
   <View>
    <Imageslider />
   </View>
   {/* Body parts */}
   <View className="flex-1">
    <BodyParts />

   </View>


   </SafeAreaView>
  )
}