import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function exercisedetails() {

    const item = useLocalSearchParams();
      console.log('item', item);
  return (
    <View>
      <Text>exercisedetails</Text>
    </View>
  )
}