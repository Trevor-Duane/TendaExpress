import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import { ChevronLeftIcon, ClockIcon } from 'react-native-heroicons/solid';

const PaymentsScreen = () => {
  const navigation =  useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="px-2">
            <View className="flex-row justify-between items-center pt-2 py-2 border-b border-gray-200">
                <TouchableOpacity onPress={navigation.goBack}>
                    <ChevronLeftIcon size={24} color="#6C0BA9"/>
                </TouchableOpacity>
                <Text className="text-purple-500 text-lg">Order Accepted</Text>
            </View>

            <View className="px-2 py-1">
                <Text className="text-gray-500 text-xl font-extrabold">Delivering to</Text>
            </View>

            <View className="bg-purple-600 rounded-lg justify-between mt-2">
                <View className="mb-6">
                    <Text className="pb-4 px-2 text-lg text-white font-medium">Tenda House, 1st floor, Bwebajja, Ebbs</Text>
                </View>

                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center px-2 py-1">
                        <View>
                            <ClockIcon size={18} color="#ffffff"/>
                        </View>
                        <View>
                            <Text className="text-lg text-white font-medium">12min</Text>
                        </View>
                    </View>
                    <View className="px-2 py-1">
                        <Text className="text-lg text-white font-medium">Delivery Order</Text>
                    </View>
                </View>
            </View>

            <View className="px-2 py-4">
                <Text className="text-gray-500 text-xl font-extrabold">Payment Method</Text>
            </View>

            
                
           
        </View>
            <View className="absolute mb-1 bottom-0 flex left-20 ">
            <TouchableOpacity onPress={() => {navigation.navigate('Map')}} className="rounded-sm items-center justify-center bottom-0 relative w-56 px-2 py-1 bg-purple-500">
                <Text className="p-2 text-xl text-white font-bold">checkout</Text>
            </TouchableOpacity>
            </View>
        
    </SafeAreaView>
  )
}

export default PaymentsScreen