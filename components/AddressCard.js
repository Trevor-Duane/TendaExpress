import { View, Text, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { Base_Url } from '../constants/api';
import { useSelector } from 'react-redux';
import { getDistance, getPreciseDistance } from 'geolib';
import axios from 'axios';
import { base_dis } from '../constants/maps';
import headers from '../constants/headers';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowDownLeftIcon, ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, MagnifyingGlassIcon, StopCircleIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddressCard() {

    let RestaurantLocation = { 
        gps: {
            latitude: 0.18441485939905478,
            longitude: 32.538370291740904
        }
      }

    const userData = useSelector((state) => state.auth.userData);

    const [option, setOption] = React.useState("");
    const [user_id, setUser_id] = React.useState(userData.user.id)
    const [isSelected, setIsSelected] = React.useState(null);
    const [addresses, setAddresses] =  React.useState([]);

    const fetctAddresses = async () => {
        console.log("fetch using this user_id",user_id)
    await axios.get(`${Base_Url}/addresses/${user_id}`, {headers: headers})
    .then(response => {
        console.log("fetching addresses response", response.data.data)
        setAddresses(response.data.data)
    })
    .catch(err => {
        console.error(err)
        console.log("error", err.message)
    })
    
    }
    React.useEffect(() => {
    fetctAddresses()
    }, [user_id])

    const calculateDistance = async () => {
        selectedAddress = addresses.filter(a => a.id == isSelected)
        console.log("this is selected", selectedAddress)
        await AsyncStorage.setItem('saddress', JSON.stringify(selectedAddress))


        let pdis = getPreciseDistance(
            {latitude: selectedAddress[0].address_latitude, longitude: selectedAddress[0].address_longitude},
            RestaurantLocation.gps
        )
        if(pdis <= base_dis){
            pdis = base_dis
          await AsyncStorage.setItem('pdistance', JSON.stringify(pdis))
        } 
        console.log("pdis", pdis)
        await AsyncStorage.setItem('pdistance', JSON.stringify(pdis))
    }
    React.useEffect(() => {
        calculateDistance()

    }, [isSelected])
  return (
    <>
   {addresses.map((address, index) => (
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
   </>
  )
}