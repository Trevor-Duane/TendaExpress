import { View, Text, Image, Pressable, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import CartScreen from './CartScreen';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, MinusIcon, PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import BasketIcon from '../components/BasketIcon';

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
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar className="bg-purple-600" barStyle="light-content"/>

      <View className="w-fulls border-t-2 border-purple-400">
          <Pressable onPress={() => navigation.goBack()} className="absolute z-50 left-2 top-2 h-7 shadow w-7 rounded-full bg-purple-600 justify-center items-center">
            <ArrowLeftIcon size={18} color="#ffffff"/>
          </Pressable>

          <View>
            <Image source={imgUrl} className="h-72 w-full border rounded-b-3xl border-purple-600"/>
          </View>

          <View className="flex-row items-center px-2 bg-gray-200 w-14 h-7 rounded-bl-3xl rounded-tr-xl absolute bottom-2 left-2">
            <StarIcon size={12} color="#A020F0"/>
            <Text className="px-1 text-sm">4.8</Text>
          </View>
      </View>

      <View className="flex-row justify-between items-center">
        <View className="p-2">
          <Text className="capitalize font-black text-xl">{name}</Text>
          <Text className="text-gray-600">{short_description}</Text>
        </View>

        <View className="mx-2 flex-row items-center shadow-xl justify-center bg-gray-200 w-20 h-7 rounded-full space-x-1">
            <Pressable onPress={() => {}} className="">
              <MinusIcon size={16} color="#51087E"/>
            </Pressable>

            <View className="">
              <Text className="text-sm text-black font-bold p-1">0</Text>
            </View>

            <Pressable onPress={() => {}} className="p-1">
              <PlusIcon size={16} color="#51087E"/>
            </Pressable>
            
        </View>
      </View>

      <View>
        <View className="p-2 h-auto">
          <Text className="capitalize font-black text-purple-900 text-lg">Description</Text>
          <Text className="text-sm text-gray-600 h-auto flex-auto">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Text>
        </View>
      </View>

      <View className="absolute bottom-20 w-full flex-row py-1 items-center justify-end">

        <View className="bg-gray-200 flex-row items-center justify-center rounded-tl-xl">
          <Text className="text-base font-bold ml-1 py-2">Shs</Text>
          <Text className="text-sm font-semibold mx-2 py-2">36,000</Text>
        </View>

        <View className="items-center justify-center mr-4">
          <TouchableOpacity className="bg-purple-600 w-full rounded-br-xl">
            <Text className="text-white text-base font-bold text-center px-2 py-2">Price</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="absolute bottom-0 h-24 w-full">
        <BasketIcon/>
      </View>

    </SafeAreaView>
    </>
  )
}

export default SingleScreen