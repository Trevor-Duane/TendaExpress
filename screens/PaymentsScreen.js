import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Currency from 'react-currency-formatter';
import { useNavigation } from '@react-navigation/native';
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice'
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { Base_Url } from '../constants/api';
import { GOOGLE_API_KEY, RestaurantLocation } from '../constants/maps';
import headers from '../constants/headers';
import { showSuccess } from '../utils/helperFunction';
import CalculateRouteDistance from '../components/CalculateRouteDistance';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { getDistance, getPreciseDistance } from 'geolib';
import { useDispatch, useSelector } from "react-redux";
import { addDeliveryFee, addPaymentMethod } from '../reducers/orderSlice';
import { set } from 'react-native-reanimated';

function PaymentsScreen() {
    const userData = useSelector((state) => state.auth.userData);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    const orderData = useSelector((state) => state.order.orderData);
    const { delivery_fee, order_total } = orderData;


    const navigation = useNavigation();
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();

    // const origin = `${RestaurantLocation[0].address_latitude},${RestaurantLocation[0].address_longitude}`;  //orign location
    // console.log("origin", origin);
    // const destination = `${orderData.delivery_latitude},${orderData.delivery_longitude}`; //destination location
    // console.log("destination", destination);
    // const apiKey = GOOGLE_API_KEY; // google maps api key
    // console.log("apiKey", apiKey);
    // const unitSystem = 'metric'; //unit system //use "IMPERIAL" for Miles, "METRIC" for KMs
    // const travelMode = 'walking'; //travel mode

    // //calculate delivery distance
    // React.useEffect(() => {
    //     CalculateRouteDistance(origin, destination, unitSystem, travelMode, apiKey, handleDistanceCalculation);
    // }, []);

    // const handleDistanceCalculation = (distance) => {
    //     if (distance !== null) {
    //         console.log('Route Distance:', distance);
    //         // const distanceInMeters = parseInt(distance);
    //         console.log('Route Distance in Meters:', distance)
    //         setDelivery_distance(distance);
    //         dispatch(addDeliveryFee(distance));
    //         // Do something with the distance value
    //     } else {
    //         console.error('Error calculating route distance');
    //     }
    // };

    console.log("orderData in payment screen", orderData);

    const [mobile, setMobile] = React.useState("")
    const [paymode, setPaymode] = React.useState("");

    const postOrder = async () => {
        console.log("orderData in payment screen", orderData);
        const { user_id, user_name, user_contact, order_items, order_status, order_type, order_total, delivery_fee, delivery_latitude, delivery_longitude, payment_method } = orderData;
        try {
            setIsLoading(true)
            await axios.post(`${Base_Url}/neworder`, {
                user_id: user_id,
                user_name: user_name,
                user_contact: user_contact,
                order_items: JSON.stringify(order_items),
                order_status: order_status,
                order_type: order_type,
                paymode: payment_method,
                order_total: (order_total).toString(),
                delivery_fee: (delivery_fee).toString(),
                delivery_latitude: (delivery_latitude).toString(),
                delivery_longitude: (delivery_longitude).toString(),
            }, { headers: headers })
                .then(response => {
                    console.log(response)
                    setIsLoading(false)
                    showSuccess("order sent succesfully")
                    navigation.navigate("PaymentSuccess");
                    setPaymode("");
                })
                .catch(error => {
                    setIsLoading(false)
                    console.log(error)
                })
        }
        catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row justify-between items-center pt-2 py-2  px-2 border-b border-gray-200 bg-[#A020F0]">
                <TouchableOpacity onPress={navigation.goBack}>
                    <ArrowLeftIcon size={24} color="#fff" />
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold">Make Payment</Text>
            </View>
            <View className="px-2">
                <View className="py-4">
                    <Text className="text-gray-600 text-base font-extrabold">Order Details</Text>
                    <View className="flex-row bg-purple-200 justify-start items-start mt-2">
                        <View className="w-4/12">
                            <View className=" bg-black text-center">
                                <Text className="font-bold text-white p-1">Order Items</Text>
                            </View>
                            <Text className="px-1 text-gray-500 font-bold p-1">{items.length}</Text>
                        </View>

                        <View className="w-4/12">
                            <View className=" bg-black">
                                <Text className="font-bold text-white p-1">Order Total</Text>
                            </View>
                            <Text className="px-1 text-gray-600 font-bold p-1">
                                <Currency quantity={Number(order_total)} currency="UGX" pattern="##,### !" />
                            </Text>
                        </View>

                        <View className="w-4/12">
                            <View className=" bg-black">
                                <Text className="font-bold text-white p-1">Delivery fee</Text>
                            </View>
                            <Text className="px-1 text-gray-600 font-bold p-1">
                                <Currency quantity={Number(delivery_fee)} currency="UGX" pattern="##,### !" />
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="pt-6">
                    <Text className="text-gray-600 text-base font-extrabold">Preferred payment type</Text>
                </View>
                <View className="px-2 pb-4">
                    <RadioButton.Group
                        onValueChange={newValue => {
                            setPaymode(newValue)
                            dispatch(addPaymentMethod(newValue))
                        }}
                        value={paymode}>

                        <View className="flex-row items-center">
                            <RadioButton value='cash' color="#A020F0" />
                            <Text>Cash</Text>
                        </View>

                        <View className="flex-row items-center">
                            <RadioButton value='momo' color="#A020F0" />
                            <Text>Mobile Money</Text>
                        </View>
                    </RadioButton.Group>
                </View>

                {/* {paymode === 'momo' ?
                <View className="shadow bg-white rounded">
                    <View className="pt-2">
                        <Text className="text-gray-500 text-base font-extrabold text-center">MTN / Airtel Money Accepted</Text>
                    </View>
    
                    <View>
                        <View>
                            <Text className="pb-2 p-2 text-base font-bold text-purple-900">Mobile Number</Text>
                        </View>
    
                        <View className="px-2 pb-2">
                            <TextInput
                                placeholder="256 7XX XXX XXX"
                                autoCapitalize='none'
                                value={mobile}
                                onChangeText={mobile => setMobile(mobile)}                        
                                className="text-purple-800 w-full h-12 px-2 bg-gray-200 rounded-md"
                            />
                            <View className="flex-row  space-x-1 pt-2">
                                <Text className="text-gray-700 text-center text-xs">Amount:</Text>
                            <Text className="text-gray-700 text-center text-xs">
                                <Currency quantity={Number(amount)} currency="UGX" pattern="##,### !"/>
                            </Text>
                            </View>
                        </View>
                    </View>
    
                    <View className="flex-row justify-end p-2">
                        <Pressable
                            onPress={() => {}}
                            className="bg-black p-2 items-center justify-center border rounded-md border-solid border-white w-1/4 relative">
                            <Text className="text-white text-base">Payout</Text>
                        </Pressable>
                    </View>
                </View>
                :
                null
                } */}

            </View>

            {paymode ?
                <View className="flex-1 relative">
                    <View className="items-center justify-center w-screen px-2 mb-2 bottom-0 absolute">
                        <Pressable
                            onPress={postOrder}
                            className="bg-purple-600 py-2 items-center justify-center border rounded-md border-solid border-white w-full"
                        >
                            {isLoading
                            ?
                            <ActivityIndicator size="small" color="#FFFFFF"/> 
                            : 
                            <Text className="text-white font-bold text-xl">Submit Order</Text>}
                            
                        </Pressable>
                    </View>
                </View>
                :
                null
            }
        </SafeAreaView>
    )
}

export default PaymentsScreen