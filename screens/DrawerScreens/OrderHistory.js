import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, Bars3BottomLeftIcon } from 'react-native-heroicons/solid';

const OrderHistory = () => {
    const navigation =  useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}
         <View className="bg-[#A020F0]s">
               <View className="flex-row items-center px-2 pt-2 pb-1 justify-between">
                    <View className="rounded px-1 shadows">
                        <ArrowLeftIcon 
                            onPress={() => navigation.goBack()}
                            size={20} 
                            color="#fff"
                        />
                    </View>

                    <View className="flex-1">
                        <Text className="font-extrabold text-xl text-center text-white">Order History</Text>
                    </View>
                </View>
         </View>

         <View className="flex-1 bg-gray-200">

         </View>

    </SafeAreaView>
  )
}

export default OrderHistory