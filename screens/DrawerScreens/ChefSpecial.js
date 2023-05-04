import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, Bars3BottomLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import SpecialsMenu from '../../components/SpecialsMenu';
const ChefSpecial = () => {
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
                        <Text className="font-extrabold text-xl text-center text-white">Chef's Sepcials</Text>
                    </View>
                </View>
         </View>

         <View className="flex-1 bg-gray-200 pb-4">
            <View className="p-2 flex-row items-center justify-between">
                <Text className="text-2xl font-bold w-40">Our Chef's Special </Text>
                
                <Pressable>
                    <ShoppingCartIcon size={32} color="#000"/>
                    <Text className="absolute top-4 bg-purple-600 text-white font-bold text-sm px-1 rounded">2</Text>
                </Pressable>
            </View>

            <View className="pb-20">
                <SpecialsMenu/>
            </View>

         </View>

    </SafeAreaView>
  )
}

export default ChefSpecial