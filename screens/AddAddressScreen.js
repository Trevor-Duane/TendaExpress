import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, StopCircleIcon } from 'react-native-heroicons/solid';
import { Base_Url } from '../constants/api';
import { getDistance, getPreciseDistance } from 'geolib';
import CalculateRouteDistance from '../components/CalculateRouteDistance';
import axios from 'axios';
import { base_dis, RestaurantLocation, GOOGLE_API_KEY } from '../constants/maps';
import headers from '../constants/headers';
import { useDispatch, useSelector } from "react-redux";
import { addDeliveryFee, addDeliveryLatitude, addDeliveryLongitude } from '../reducers/orderSlice';
import { set } from 'react-native-reanimated';


export default function AddAddressScreen() {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  const orderData = useSelector((state) => state.order.orderData);

  console.log("orderData", orderData)

  const navigation = useNavigation();
  const [user_id, setUser_id] = React.useState(userData.user.id);

  const [addresses, setAddresses] = React.useState([]);

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
      await axios.get(`${Base_Url}/addresses/${user_id}`, { headers: headers })
        .then(response => {
          console.log("fetching addresses response", response.data.data)
          setAddresses(response.data.data)
          // setAddress(response.data.data[0])
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
  React.useMemo(() => {
    const selectAddress = async () => {
      try {
        setAddress(addresses.filter(a => a.id === isSelected))
      } catch (error) {
        console.log("select address error", error)
      }
    }

    selectAddress()
  }, [isSelected])


  //calculate delivery distance
  const origin = `${RestaurantLocation[0].address_latitude},${RestaurantLocation[0].address_longitude}`;  //orign location
  console.log("origin", origin);

  const destination = `${orderData.delivery_latitude},${orderData.delivery_longitude}`; //destination location
  console.log("destination", destination);

  const apiKey = GOOGLE_API_KEY; // google maps api key
  console.log("apiKey", apiKey);

  const unitSystem = 'metric'; //unit system //use "IMPERIAL" for Miles, "METRIC" for KMs
  const travelMode = 'walking'; //travel mode

  React.useEffect(() => {
    CalculateRouteDistance(origin, destination, unitSystem, travelMode, apiKey, handleDistanceCalculation);
  }, [isSelected]);

  const handleDistanceCalculation = (distance) => {
    if (distance !== null) {
      console.log('Route Distance:', distance);
      console.log('Route Distance in Meters:', distance)
      dispatch(addDeliveryFee(distance));
      // Do something with the distance value
    } else {
      console.error('Error calculating route distance');
    }
  };

  React.useEffect(() => {
    handleDistanceCalculation()
  }, [isSelected]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row pb-2 items-center justify-between pt-1 bg-[#A020F0]">

        <Pressable onPress={navigation.goBack} className="px-2">
          <ArrowLeftIcon size={18} color="#fff" />
        </Pressable>

        <View className="px-2">
          <Text className="text-base text-white">Set Delivery Location</Text>
        </View>

        <View className="px-2">
          <EllipsisVerticalIcon size={18} color="#fff" />
        </View>
      </View>

      {/* address card */}
      <View>
        {addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            onPress={() => {
              setIsSelected(address.id)
              dispatch(addDeliveryLatitude(address.address_latitude))
              dispatch(addDeliveryLongitude(address.address_longitude))
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
                    onPress={() => { }}
                    title='right drawer'
                    size={22} color={isSelected == address.id ? "#A020F0" : "#000"}
                    className="p-4" />
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
                onPress={() => { }}
                title='right drawer'
                size={36} color={isSelected == address.id ? "#A020F0" : "#000"}
                className="p-4" />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View className="absolute bottom-1">
        <View className="items-center justify-center w-screen px-2 mb-2">
          <TouchableOpacity onPress={() => { navigation.navigate('Address') }} className="bg-black rounded w-full">
            <Text className="text-white text-xl font-bold text-center px-2 py-3">Add Address</Text>
          </TouchableOpacity>
        </View>

        {isSelected != null ?
          <View className="items-center justify-center w-screen px-2 mb-2">
            <TouchableOpacity onPress={() => {
              navigation.navigate('Payments')
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