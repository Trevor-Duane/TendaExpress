import { View, Text, Image, Pressable, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/solid';

const SingleScreen = () => {
  const navigation =  useNavigation();

  const {params:{
    name,
    price,
    short_description,
    imgUrl,
}} = useRoute();

  return (
    <>
    <SafeAreaView className="flex-1 bg-purple-100 pt-2">
      <StatusBar className="bg-purple-100" barStyle="light-content"/>
      <View className="p-2 flex-1 bg-purple-100 border-t-2 border-purple-200">
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#51087E"/>
        </Pressable>

        <View className="pt-4 flex items-center justify-center">
          <Text className="capitalize font-black text-purple-900 text-xl">{name}</Text>
          <Text>{short_description}</Text>
        </View>

        <View className="pt-4 flex items-center justify-center shadow-xl">
          <Image source={imgUrl} className="h-60 w-full rounded-full border border-purple-600"/>

          <View className="flex-row items-center justify-center bg-white w-32 rounded-full mt-2 space-x-2">
          <Pressable onPress={() => {}} className="bg-white p-1">
            <PlusIcon size={24} color="#51087E"/>
          </Pressable>
          <View className="bg-[#E2C0F8] p-1">
            <Text className="text-base p-1">0</Text>
          </View>
          <Pressable onPress={() => {}} className="bg-white p-1">
            <MinusIcon size={24} color="#51087E"/>
          </Pressable>
        </View>
        </View>

        
        
      </View>
    </SafeAreaView>
    <SafeAreaView className="rounded-t-2xl bg-white absolute bottom-0 w-full">
      <View className="pb-4 flex items-center justify-center rounded-t-2xl">
        <Text>SingleScreen</Text>
        <Text>SingleScreen</Text>
        <Text>SingleScreen</Text>
      </View>
    </SafeAreaView>
    </>
  )
}

export default SingleScreen