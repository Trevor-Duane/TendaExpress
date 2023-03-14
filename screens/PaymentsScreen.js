import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Currency from 'react-currency-formatter';
import { useRoute, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice'
import * as Location from 'expo-location';
import React from 'react'
import { ArrowLeftIcon, ChevronLeftIcon, ClockIcon } from 'react-native-heroicons/solid';

const PaymentsScreen = () => {
    
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const navigation =  useNavigation();

    // const [currentLocation, setCurrentLocation] = React.useState({ lat: 0.32768, lng: 32.5844992 });
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [contact, setContact] = React.useState(null);
    // const [address, setAddress] = React.useState({ lat: 0.1842121, lng: 32.5362261 });

    // const getLocation = async () => {
    //     let { coords } = await Location.getCurrentPositionAsync();
    //     Location.setGoogleApiKey(apiKey);
    //     setLocation(coords);
    //     console.log(coords);

    //     if (coords) {
    //         let { longitude, latitude } = coords;

    //         let regionName = await Location.reverseGeocodeAsync({
    //         longitude,
    //         latitude,
    //         });
    //         setAddress(regionName[0]);
    //         console.log(regionName, 'nothing');
    //     }
    // }
    // React.useEffect(() => {
    // getLocation()
    // }, [])
    function textInputChange1(){
        setContact(null)
    }
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="px-2">
            <View className="flex-row justify-between items-center pt-2 py-2 border-b border-gray-200">
                <TouchableOpacity onPress={navigation.goBack}>
                    <ArrowLeftIcon size={24} color="#6C0BA9"/>
                </TouchableOpacity>
                <Text className="text-purple-500 text-lg">Make Payment</Text>
            </View>

            {/* <View className="bg-purple-600 rounded-lg justify-between mt-2">
                <View className="mb-6">
                    <Text className="pb-4 px-2 text-lg text-white font-medium">Tenda House, 1st floor, Bwebajja, Ebbs</Text>
                </View>

                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center px-2 py-1">
                        <View>
                            <ClockIcon size={18} color="#ffffff"/>
                        </View>
                        <View>
                            <Text className="text-lg text-white font-medium">Apx 12min</Text>
                        </View>
                    </View>
                    <View className="px-2 py-1">
                        <Text className="text-lg text-white font-medium">Delivery Order</Text>
                    </View>
                </View>
            </View> */}

            <View className="py-4">
                <Text className="text-gray-600 text-xl font-extrabold">Order Details</Text>
                <View className="flex-row bg-purple-200 justify-start items-start mt-2">
                    <View className="w-6/12">
                        <View className=" bg-black text-center">
                            <Text className="font-bold text-lg text-white p-1">Order Items</Text>
                        </View>
                        <Text className="px-1 text-gray-500 font-bold text-base p-1">{items.length}</Text>
                    </View>

                    <View className="w-6/12">
                        <View className=" bg-black">
                            <Text className="font-bold text-lg text-white p-1">Your Order Total</Text>
                        </View>
                            <Text className="px-1 text-gray-600 font-bold text-base p-1">
                                <Currency quantity={basketTotal} currency="UGX" pattern="##,### !"/>
                            </Text>
                    </View>
                </View>
            </View>

            <View>
                <View className="py-1">
                    <Text className="text-gray-500 text-xl font-extrabold">Delivering to</Text>
                </View>

                <View className="bg-gray-200">

                    <View className="justify-start px-1 py-1">
                        <Text className="text-sm text-black font-medium">Address </Text>
                        <Text className="text-sm text-gray-500 font-medium">Bwebajja</Text>
                    </View>

                    <View className="justify-start px-1 py-1">
                        <Text className="text-sm text-black font-medium">House/Flat No</Text>
                        <Text className="text-sm text-gray-500 font-medium">Flat 2, House 7</Text>
                    </View>

                    <View className="justify-start px-1 py-1">
                        <Text className="text-sm text-black font-medium">Street Name: </Text>
                        <Text className="text-sm text-gray-500 font-medium">Bwebajja, Entebbe Road</Text>
                    </View>

                    <View className="justify-start px-1 py-1">
                        <Text className="text-sm text-black font-medium">Landmarks: </Text>
                        <Text className="text-sm text-gray-500 font-medium">Kitende, Modern school</Text>
                    </View>
                </View>
            </View>

            <View className="pt-4">
                <Text className="text-gray-500 text-xl font-extrabold">MTN / Airtel Money Accepted</Text>
            </View>

            <View>
                <View>
                    <Text className="pb-2 pt-2 text-base font-bold text-purple-900">Mobile Number</Text>
                </View>

                <View>
                    <TextInput
                        placeholder="075X XXX XXX / 078X XXX XXX"
                        autoCapitalize='none'
                        onChangeText={() => textInputChange1()}
                        className="text-purple-800 text-base w-full h-12 px-2 bg-gray-200 rounded-md"
                    />
                    <Text className="text-sm text-red-500">Payment Errors</Text>
                </View>
            </View>

            
                
           
        </View>
            <View className="absolute bottom-0">
                <View className="items-center justify-center w-screen px-2 mb-2">
                    <TouchableOpacity onPress={() => navigation.navigate('PaymentSuccess')} className="bg-purple-600 rounded w-full">
                        <Text className="text-white text-base font-bold text-center px-3 py-2">Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        
    </SafeAreaView>
  )
}

export default PaymentsScreen