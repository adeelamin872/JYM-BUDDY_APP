import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';
import { fetchExercisesBodyPart } from '../api/exerciseDB';
import ExercisesList from '../components/ExercisesList';
import { demoexercises } from '../constants';

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState(demoexercises);
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, [item]);

  const getExercises = async (bodyPart) => {
    console.log("Fetching exercises for:", bodyPart);
    let data = await fetchExercisesBodyPart(bodyPart);
    console.log('got data', data);
    setExercises(data); // update state with GIFs
  };

  return (
    <ScrollView>
      <StatusBar style="light"/>
      
      {/* Header image */}
      <Image 
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />

      {/* Back button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute rounded-full justify-center items-center"
        style={{ height: hp(5), width: hp(5), marginTop: hp(4) }}
      >
        <Ionicons name='caret-back-outline' size={hp(3.5)} color='white' />
      </TouchableOpacity>

      {/* Exercises list */}
      <View className="mx-4 mt-4">
        <Text className="text-white font-bold capitalize text-xl">
          {item.name} Exercises
        </Text>

        <ExercisesList data={exercises} />
      </View>
    </ScrollView>
  );
}

// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { ScrollView } from 'react-native-virtualized-view';
// import { fetchExercisesBodyPart } from '../api/exerciseDB';
// import ExercisesList from '../components/ExercisesList';
// import { demoexercises } from '../constants';


// export default function Exercises() {
//   const router = useRouter();
//   const [exercises, setExercises] = useState(demoexercises);
//   const item = useLocalSearchParams();
//   console.log('item', item);
  
  

//   // useEffect ko optimize krte hain, taki bar bar call na ho
//   useEffect(() => {
//     if (item) {
//       getExercises(item.name);
//     }
//     // sirf item.name change hone pe hi call ho
//   }, [item]);

//   const getExercises = async (bodyPart) => {
//     console.log("Fetching exercises for:", bodyPart);
//     let data = await fetchExercisesBodyPart(bodyPart);
//     console.log('got data', data);
    
    
//   };

//   return (
//     <ScrollView>
//       <StatusBar style="light"/>
//       <Image 
//       source={item.image}
//       style={{width:wp(100),height:hp(45)}}
//       className="rounded-b-[40px]"
//       />

//       <TouchableOpacity
//       onPress={()=>router.back()}
//       className="bg-rose-500 mx-4 absolute rounded-full justify-center items-center "
//       style={{height:hp(5), width:hp(5), marginTop:hp(4) }}
//       >
//       <Ionicons name='caret-back-outline' size={hp(3.5)} color='white' />

//       </TouchableOpacity>


//       {/* exercises lists of each part */}

//       <View className="mx-4 mt-4">
//         <Text className="text-white font-bold capitalize text-xl" >
//           {item.name} Exercises
//         </Text>
//         <View className="mb-10">
//           <ExercisesList data={exercises} />

//         </View>

//       </View>


//     </ScrollView>
//   );
// }
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
// import { fetchExercisesBodyPart } from '../api/exerciseDB';
// import { StatusBar } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { ScrollView } from 'react-native-virtualized-view';
// import ExercisesList from '../components/ExercisesList';

// export default function Exercises() {
//   const router = useRouter();
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const item = useLocalSearchParams();
  
//   console.log('item', item);

//   // FIXED: Prevent infinite re-renders
//   useEffect(() => {
//     let isMounted = true;
    
//     const getExercises = async () => {
//       if (item && item.name) {
//         try {
//           console.log("Fetching exercises for:", item.name);
//           setLoading(true);
//           let data = await fetchExercisesBodyPart(item.name);
          
//           if (isMounted) {
//             console.log('got data', data);
//             if (data && Array.isArray(data)) {
//               setExercises(data);
//             } else {
//               console.log("No data received or data is not an array");
//               setExercises([]);
//             }
//           }
//         } catch (error) {
//           console.log("Error fetching exercises:", error);
//           if (isMounted) {
//             setExercises([]);
//           }
//         } finally {
//           if (isMounted) {
//             setLoading(false);
//           }
//         }
//       }
//     };

//     getExercises();

//     return () => {
//       isMounted = false;
//     };
//   }, [item?.name]); // Only depend on item.name

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading exercises...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <StatusBar style="light"/>
      
//       {item.image && (
//         <Image 
//           source={{ uri: item.image }}
//           style={{ width: wp(100), height: hp(45) }}
//           className="rounded-b-[40px]"
//         />
//       )}

//       <TouchableOpacity
//         onPress={() => router.back()}
//         className="bg-rose-500 mx-4 absolute rounded-full justify-center items-center"
//         style={{ height: hp(5), width: hp(5), marginTop: hp(4) }}
//       >
//         <Ionicons name='caret-back-outline' size={hp(3.5)} color='white' />
//       </TouchableOpacity>

//       <View className="mx-4 mt-4 space-y-3">
//         <Text className="text-black-900 font-bold text-xl">
//           {item.name} Exercises
//         </Text>
        
//         <View className="mb-10">
//           {exercises.length > 0 ? (
//             <ExercisesList data={exercises} />
//           ) : (
//             <View className="items-center mt-10">
//               <Text className="text-center text-gray-500 text-lg">
//                 Rate Limit Exceeded
//               </Text>
//               <Text className="text-center text-gray-400 mt-2">
//                 Please wait a moment and try again
//               </Text>
//               <TouchableOpacity
//                 onPress={() => getExercises(item.name)}
//                 className="bg-rose-500 px-4 py-2 rounded-full mt-4"
//               >
//                 <Text className="text-white font-semibold">Retry</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }