import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, Bars3BottomLeftIcon, ShareIcon, StarIcon } from 'react-native-heroicons/solid';

const Setting = () => {
    const navigation =  useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}
         <View className="bg-[#A020F0]s">
               <View className="flex-row items-center px-2 pt-2 pb-1 justify-between">
                    <TouchableOpacity className="rounded px-1 shadows" onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon 
                            size={20} 
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <View className="flex-1">
                        <Text className="font-extrabold text-xl text-center text-white">Settings</Text>
                    </View>
                </View>
         </View>

         <View className="flex-1 bg-gray-200">

            <View className="p-2 space-y-4 m-2">

                <Pressable className="flex-row items-center space-x-2 bg-white rounded p-1">
                    <ShareIcon size={28} color="#A020F0"/>
                    <Text className="text-base font-semibold py-2">Share App</Text>

                </Pressable>

                <Pressable className="flex-row items-center space-x-2 bg-white rounded p-1">
                    <StarIcon size={28} color="#A020F0"/>
                    <Text className="text-base font-semibold py-2">Rate App</Text>
                </Pressable>
            </View>

         </View>

    </SafeAreaView>
  )
}

export default Setting