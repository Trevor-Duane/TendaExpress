import { View, Text, Pressable, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/solid";


const OrderType = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 px-4">
        {/* Header */}
        <View className="flex-row pb-2 items-center mx-2 justify-between pt-2">
            <View>
                <Text className="font-semibold text-xl">Martin</Text>
            </View>

            <View>
                <UserCircleIcon size={36} color="#000" className="p-1"/>
            </View>
        </View>

        <View>
            <View className="items-center pb-6">
                <Text className="text-xl text-center text-gray-500">What do you want to do{"\n"}today?</Text>
            </View>
        </View>

        <View>
            <Pressable className="bg-purple-600 rounded w-96">
                <Text className="px-2 pt-2 text-white font-bold text-xl">Make a Delivery Order?</Text>
                <Text className="px-2 pb-4 pt-1 w-96 text-justify text-lg text-gray-300">Order for any items, make payment and let us deliver them to you.</Text>
            </Pressable>

            <Pressable className="rounded w-96 mt-4 mb-4 border border-solid border-gray-300">
                <Text className="px-2 pt-2 text-black font-bold text-xl">Make a Dine-in Order?</Text>
                <Text className="px-2 pb-4 pt-1 w-96 text-justify text-lg text-gray-300">Order for any items, make payment and let us deliver them to you.</Text>
            </Pressable>

            <Pressable className="rounded w-96 border border-solid border-gray-300">
                <Text className="px-2 pt-2 text-black font-bold text-xl">Make a Pick-up Order?</Text>
                <Text className="px-2 pb-4 pt-1 w-96 text-justify text-lg text-gray-300">Order for any items, make payment and let us deliver them to you.</Text>
            </Pressable>
        </View>
        
    </SafeAreaView>
  )
}

export default OrderType