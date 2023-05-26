import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, StopCircleIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import { Base_Url } from '../constants/api';
import { getDistance, getPreciseDistance } from 'geolib';
import axios from 'axios';
import { base_dis, RestaurantLocation } from '../constants/maps';
import headers from '../constants/headers';

export default function AddAddressScreen() {

  const userData = useSelector((state) => state.auth.userData);

  const navigation =  useNavigation();
  const [user_id, setUser_id] = React.useState(userData.user.id);

  const [addresses, setAddresses] =  React.useState([]);

  const [option, setOption] = React.useState("");
  const [isSelected, setIsSelected] = React.useState(null);
  const [address, setAddress] = useState([]);
  const [cal_distance, setCal_distance] = React.useState(null);


  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });

  }, [])
  
  //fetch all addresses attached to this user
  const fetchAddresses = async () => {
    try {
      await axios.get(`${Base_Url}/addresses/${user_id}`, {headers: headers})
    .then(response => {
        console.log("fetching addresses response", response.data.data)
        console.log("fetching addresses response", response.data.data[0].id)
        setAddresses(response.data.data)
        setIsSelected(response.data.data[0].id)
        setAddress(response.data.data[0])
    })
    .catch(error => {
        console.log("Fetch Addreess Error", error)
    })
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    fetchAddresses()
  }, [user_id])

  //select a single address rom fetchedAddresses
  React.useEffect(() => {
    const selectAddress = async () => {
      try {
        setAddress(addresses.filter(a => a.id === isSelected))
        await AsyncStorage.setItem('saddress', JSON.stringify(address))

        const set = await AsyncStorage.getItem('saddress')
        console.log("set address is", set)

      } catch (error) {
        console.log("select address error", error)
      }
    }

    selectAddress()
  }, [isSelected])


// const calculateDistance = async () => {
//   try {
//     console.log("this is selected", address)
//     console.log("Customer Location", address[0])
//     console.log("Restaurant Location", RestaurantLocation[0])
//     await AsyncStorage.setItem('saddress', JSON.stringify(address))

//     const pdis = getPreciseDistance(
//       {latitude: address[0].address_latitude, longitude: address[0].address_longitude},
//       {latitude: RestaurantLocation[0].latitude, longitude: RestaurantLocation[0].longitude}
//     )

//     console.log("pdis before the if", pdis)

//     const set = await AsyncStorage.getItem('saddress')
//     console.log("setted", set)
    

//     if(pdis <= base_dis){
//       return await AsyncStorage.setItem('pdistance', JSON.stringify(base_dis))
//     }
//     else {
//       return await AsyncStorage.setItem('pdistance', JSON.stringify(pdis))
//     }
    
//   } catch (error) {
//     console.log(error)
    
//   }
    
// }
  
//   React.useEffect(() => {
//     calculateDistance()

//   }, [address])

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row pb-2 items-center justify-between pt-1 bg-[#A020F0]">

            <Pressable onPress={navigation.goBack} className="px-2">
                <ArrowLeftIcon size={18} color="#fff"/>
            </Pressable>

            <View className="px-2">
                <Text className="text-base text-white">Set Delivery Location</Text>
            </View>

            <View className="px-2">
                <EllipsisVerticalIcon size={18} color="#fff"/>
            </View>
        </View>

        {/* address card */}
        <View>
          {addresses.map((address) => (
            <TouchableOpacity
                key={address.id}
                onPress={() => {
                    setIsSelected(address.id)
                    setOption(address.title)
                    
                }}
                style={{
                    borderWidth: 1,
                    borderColor: isSelected == address.id ? '#A020F0' : '#BEBEBE'
                }}
                className="flex-row justify-between items-center mx-2 my-2 border rounded p-2"
                >
            {/* left view */}
                <View>
                    <View className="flex-row gap-2 items-center">
                        <View>
                            <GlobeAmericasIcon
                                onPress={() => {}}
                                title='right drawer'
                                size={22} color={isSelected == address.id ? "#A020F0" : "#000"}
                                className="p-4"/>
                        </View>
                        <View>
                            <Text className={`${isSelected == address.id ? "font-bold text-purple-800" : "text-black"}`}>{address.address_address}</Text>
                        </View>
                    </View>
                    <View>
                        <Text className="text-[12px] text-gray-500">{address.house_no}</Text>
                        <Text className="text-[12px] text-gray-500">Landmark: {address.landmark}</Text>
                    </View>
                </View>

            {/* right view */}
                <View>
                    <StopCircleIcon
                        onPress={() => {}}
                        title='right drawer'
                        size={36} color={isSelected == address.id ? "#A020F0" : "#000"}
                        className="p-4"/>
                </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="absolute bottom-1">
          <View className="items-center justify-center w-screen px-2 mb-2">
            <TouchableOpacity onPress={() => {navigation.navigate('Address')}} className="bg-black rounded w-full">
              <Text className="text-white text-xl font-bold text-center px-2 py-3">Add Address</Text>
            </TouchableOpacity>
          </View>

         {isSelected != null ?
          <View className="items-center justify-center w-screen px-2 mb-2">
            <TouchableOpacity onPress={() => {
              navigation.navigate('Payments')
              setIsSelected(null)
              }} className="bg-purple-600 rounded w-full">
              <Text className="text-white text-xl font-bold text-center px-2 py-3">Make Payment</Text>
            </TouchableOpacity>
          </View>
        :
        null
        }
        </View>
    </SafeAreaView>
  )
}