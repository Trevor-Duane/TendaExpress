import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddressCard from '../components/AddressCard';
import { ArrowDownLeftIcon, ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, MagnifyingGlassIcon, StopCircleIcon, UserCircleIcon } from 'react-native-heroicons/solid';

export default function AddAddressScreen() {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row pb-2 items-center mx-2 justify-between pt-1">   
            <View>
                <ArrowLeftIcon size={18} color="#000"/>
            </View>

            <View>
                <Text className="text-base text-black">Set Delivery Location</Text>
            </View>

            <View>
                <EllipsisVerticalIcon size={18} color="#000"/>
            </View>
        </View>

        <View className="mx-2 pb-2">
            <View className="flex-row items-center space-x-2 bg-white shadow rounded-lg p-2">
                <MagnifyingGlassIcon size={18} color="#a020f0" className="font-bold" />
                <TextInput 
                    placeholder='Find Address'
                    keyboardType='default'
                />
            </View>
        </View>

        <AddressCard/>

        <View className="absolute bottom-1">
        <View className="items-center justify-center w-screen px-2 mb-2">
          <TouchableOpacity onPress={() => {navigation.navigate('Address')}} className="bg-black rounded w-full">
            <Text className="text-white text-base font-bold text-center px-2 py-3">Add New Address</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center justify-center w-screen px-2 mb-2">
          <TouchableOpacity onPress={() => {navigation.navigate('Payments')}} className="bg-purple-600 rounded w-full">
            <Text className="text-white text-base font-bold text-center px-2 py-3">Proceed to payment</Text>
          </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}