import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import React from 'react'
import { bodyParts } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

export default function BodyParts() {
  const router=useRouter();
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-bold text-neutral-700">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const BodyPartCard = ({ item,router, index }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push({pathname:`/exercises`, params:item})}
      style={{ width: wp(44), height: hp(22) }}
      className="mb-4 rounded-xl overflow-hidden bg-neutral-200"
    >
      {/* Background Image */}
      <Image
        source={item.image}
        className="w-full h-full"
        resizeMode="cover"
      />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ width: wp(44), height: hp(22) }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute bottom-0"
      />

      {/* Text on top of gradient */}
      <Text
        style={{ fontSize: hp(2.5) }}
        className="absolute bottom-3 left-0 right-0 text-white font-bold text-center tracking-wide"
      >
        {item?.name}
      </Text>
    </TouchableOpacity>
  )
}
