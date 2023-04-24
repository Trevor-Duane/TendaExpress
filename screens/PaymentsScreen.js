import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Currency from 'react-currency-formatter';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice'
import axios from 'axios';
import { Base_Url } from '../constants/api';
import headers from '../constants/headers';
import { showSuccess } from '../utils/helperFunction';
import React from 'react'
import { ArrowLeftIcon, ChevronLeftIcon, ClockIcon } from 'react-native-heroicons/solid';

const PaymentsScreen = () => {

    const userData = useSelector((state) => state.auth.userData);
    console.log("type of id", typeof(userData.user.id),"type of username", typeof(userData.user.username))
    
    const items = useSelector(selectBasketItems);
    console.log("type of items", typeof(items))
    const basketTotal = useSelector(selectBasketTotal)
    console.log("type of backetTotal", typeof(basketTotal))
    const navigation =  useNavigation();

    const [errorMsg, setErrorMsg] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [user_id, setUser_id] = React.useState(JSON.stringify(userData.user.id));
    const [user_name, setUser_name] = React.useState(JSON.stringify(userData.user.username));
    const [user_contact, setUser_contact] = React.useState("");
    const [order_items, setOrder_items] = React.useState(items);
    const [order_basketTotal, setOrder_basketTotal] = React.useState(basketTotal);
    const [order_status, setOrder_status] = React.useState("new");
    const [order_Type, setOrder_Type] = React.useState("");
    const [delivery_fee, setDelivery_fee] = React.useState("");
    const [delivery_latitude, setDelivery_latitude] = React.useState("");
    const [delivery_longitude, setDelivery_longitude] = React.useState("");

    const postOrder = async () => {
        let order_type = await AsyncStorage.getItem('OrderType')
        let d_fee = await AsyncStorage.getItem('pdistance')
        let s_address = JSON.parse(await AsyncStorage.getItem('saddress'))
        console.log(order_type, "||", d_fee, "||", s_address)

        // setOrder_Type(order_type)
        // setDelivery_fee(d_fee)
        // setDelivery_latitude(s_address[0].address_latitude)
        // setDelivery_longitude(s_address[0].address_longitude)

        setIsLoading(true)

        await axios.post(`${Base_Url}/neworder`, {
            user_id: user_id,
            user_name: user_name,
            user_contact: user_contact,
            order_items: JSON.stringify(order_items),
            order_status: order_status,
            order_type: JSON.stringify(order_type),
            order_total: JSON.stringify(order_basketTotal),
            delivery_fee: JSON.stringify(d_fee),
            delivery_latitude: JSON.stringify(s_address[0].address_latitude),
            delivery_longitude: JSON.stringify(s_address[0].address_longitude),
        }, {headers: headers})
        .then(response => {
            console.log(response)
            showSuccess("order sent succesfully")
            navigation.navigate("PaymentSuccess")
            setIsLoading(false)
            setUser_id("")
            setUser_name("")
            setUser_contact("")
            setOrder_items("")
            setOrder_basketTotal("")
            setOrder_status("")
            setDelivery_fee("")
            setDelivery_latitude("")
            setDelivery_longitude("")

        }).catch(error => {
            if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if(error.request){
            console.log(error.request);
            } else {
            console.log(error.message)
            }
            console.log(error.config)

        })
    }
    // React.useEffect(() => {
    //     postOrder()
    // }, [])
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="px-2">
            <View className="flex-row justify-between items-center pt-2 py-2 border-b border-gray-200">
                <TouchableOpacity onPress={navigation.goBack}>
                    <ArrowLeftIcon size={24} color="#6C0BA9"/>
                </TouchableOpacity>
                <Text className="text-purple-500 text-lg">Make Payment</Text>
            </View>

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
                        value={user_contact}
                        onChangeText={user_contact => setUser_contact(user_contact)}                        
                        className="text-purple-800 text-base w-full h-12 px-2 bg-gray-200 rounded-md"
                    />
                    <Text className="text-sm text-red-500">Payment Errors</Text>
                </View>
            </View>

            
                
           
        </View>
            <View className="absolute bottom-0">
                <View className="items-center justify-center w-screen px-2 mb-2">
                    <TouchableOpacity onPress={postOrder} className="bg-purple-600 rounded w-full">
                        <Text className="text-white text-base font-bold text-center px-3 py-2">Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        
    </SafeAreaView>
  )
}

export default PaymentsScreen