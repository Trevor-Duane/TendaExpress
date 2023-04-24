import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddressCard from '../components/AddressCard';
import { ArrowDownLeftIcon, ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, MagnifyingGlassIcon, StopCircleIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';

export default function AddAddressScreen() {

  const userData = useSelector((state) => state.auth.userData);
  console.log("userData in address", userData)

  let Order_type = AsyncStorage.getItem('OrderType');
  console.log("address screen", Order_type)
  
    const navigation =  useNavigation();
    const [user_id, setUser_id] = useState(userData.user.id);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [house, setHouse] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row pb-2 items-center mx-2 justify-between pt-1">   
            <Pressable onPress={navigation.goBack}>
                <ArrowLeftIcon size={18} color="#000"/>
            </Pressable>

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
            <Text className="text-white text-xl font-bold text-center px-2 py-3">Add New Address</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center justify-center w-screen px-2 mb-2">
          <TouchableOpacity onPress={() => {navigation.navigate('Baskets')}} className="bg-purple-600 rounded w-full">
            <Text className="text-white text-xl font-bold text-center px-2 py-3">Proceed to payment</Text>
          </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}