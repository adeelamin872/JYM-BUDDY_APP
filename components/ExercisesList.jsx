import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ExercisesList({ data }) {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data || []} // fallback agar data undefined ho
        numColumns={2}
        keyExtractor={(item) => item.id?.toString() || item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}
      />
    </View>
  );
}

const ExerciseCard = ({ item, router, index }) => {
  if (!item) return null; // agar item undefined ho, render nothing

  const name = item?.name || "Unknown Exercise"; // fallback name
  const gifUrl = item?.gifUrl || "https://via.placeholder.com/150"; // fallback GIF

  return (
    <View style={{ width: wp(44), marginBottom: hp(2) }}>
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/exercisedetails', params: item })}
        className="flex py-3 space-y-2"
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: gifUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>

        <Text
          style={{ fontSize: hp(1.9) }}
          className="text-neutral-900 font-semibold ml-1 tracking-wide"
        >
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


// import { Image } from 'expo-image';
// import { useRouter } from 'expo-router';
// import { FlatList, Text, TouchableOpacity, View } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';




// export default function ExercisesList({ data }) {
//   const router = useRouter();

//   return (
//     <View >
        
   
//          <FlatList
//            data={data}
//            numColumns={2}
//            keyExtractor={(item) => item.name}
//            showsVerticalScrollIndicator={false}
//            contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
//            columnWrapperStyle={{ justifyContent: 'space-between' }}
//            renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}

//          />
//        </View>


//      )
//    }

//    const ExerciseCard = ({ item, router, index })=>{
//     return(
//         <View>
//             <TouchableOpacity onPress={()=>router.push({pathname:'/exercisedetails',params:item})}
//             className="flex py-3 space-y-2">
//                 <View className="bg-neutral-200 shadow rounded-[25px] ">
//                     <Image 
//                      source={{ uri: item.gifUrl }}
//                      contentFit='cover'
//                      style={{width:wp(44), height:wp(52)}}
//                      className="rounded-[25px]"
//                      />
//                 </View>
//                 <Text style={{fontSize:hp(1.9)}}
//                 className="text-neutral-900 font-semibold ml-1 tracking-wide">
//                   {/* {item?.name>20? item.name.slice(0,20)+'...': item.name} */}
//                   {item.name}

//                 </Text>

//             </TouchableOpacity>
//         </View>
       
        
//     )


//    }
// import { Image } from 'expo-image'
// import { useRouter } from 'expo-router'
// import { FlatList, Text, TouchableOpacity, View } from 'react-native'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

// export default function ExercisesList({ data }) {
//   const router = useRouter();

//   return (
//     <View>
//       <FlatList
//         data={data}
//         numColumns={2}
//         keyExtractor={(item) => item.id?.toString() || item.name}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
//         columnWrapperStyle={{ justifyContent: 'space-between' }}
//         renderItem={({ item, index }) => (
//           <ExerciseCard router={router} index={index} item={item} />
//         )}
//       />
//     </View>
//   );
// }

// const ExerciseCard = ({ item, router }) => {
//   return (
//     <View className="w-[48%]">
//       <TouchableOpacity
//         onPress={() =>
//           router.push({ pathname: '/exercisedetails', params: item })
//         }
//         className="flex py-3 space-y-2"
//       >
//         <View className="bg-neutral-200 shadow rounded-[25px]">
//           <Image
//             source={{ uri: item.gifUrl }}
//             contentFit="cover"
//             style={{ width: wp(44), height: wp(52) }}
//             className="rounded-[25px]"
//           />
//         </View>

//         <Text
//           style={{ fontSize: hp(1.9) }}
//           className="text-neutral-900 font-semibold ml-1 tracking-wide"
//         >
//           {item?.name.length > 20
//             ? item.name.slice(0, 20) + '...'
//             : item.name}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
