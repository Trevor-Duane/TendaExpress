import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Currency from 'react-currency-formatter';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice'
import { RadioGroup } from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { Base_Url } from '../constants/api';
import headers from '../constants/headers';
import { showSuccess } from '../utils/helperFunction';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from "react-redux"


const PaymentsScreen = () => {
    const navigation =  useNavigation();

    const userData = useSelector((state) => state.auth.userData);
    
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)

    const [errorMsg, setErrorMsg] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [paystatus, setPaystatus] = React.useState(0)

    const [amount, setAmount] = React.useState(null)

    const [user_id, setUser_id] = React.useState("");
    const [user_name, setUser_name] = React.useState("");
    const [user_contact, setUser_contact] = React.useState("");
    const [order_items, setOrder_items] = React.useState("");
    const [order_basketTotal, setOrder_basketTotal] = React.useState("");
    const [paymode, setPaymode] = React.useState("cash")
    const [order_status, setOrder_status] = React.useState("");
    const [order_type, setOrder_type] = React.useState("");
    const [delivery_fee, setDelivery_fee] = React.useState("");
    const [delivery_latitude, setDelivery_latitude] = React.useState("");
    const [delivery_longitude, setDelivery_longitude] = React.useState("");

    const[mobile, setMobile] = React.useState("")
    // console.log(order_type, "||", delivery_fee, "||", delivery_latitude, "||", delivery_longitude, "||", order_status, "||", order_basketTotal, "||", order_items, "||", user_contact, "||", user_name, "||", user_id)

    // console.log(typeof(order_type))
    // console.log(typeof(delivery_fee))
    // console.log(typeof(delivery_latitude))
    // console.log(typeof(delivery_longitude))
    // console.log(typeof(order_status))
    // console.log(typeof(order_basketTotal))
    // console.log(typeof(order_items))
    // console.log(typeof(user_contact))
    // console.log(typeof(user_name))
    // console.log(typeof(user_id))

    //get all required data from local storage
    const fetchLSD = async () => {
       try {
        const orderType = await AsyncStorage.getItem('serviceType')
        setOrder_type(orderType)

        const deliveryFee = await AsyncStorage.getItem('pdistance')
        setDelivery_fee(deliveryFee)

        const setAddress = JSON.parse(await AsyncStorage.getItem('saddress'))
        setDelivery_latitude(setAddress[0].address_latitude)
        setDelivery_longitude(setAddress[0].address_longitude)

        setUser_id(userData.user.id)

        setUser_contact(userData.user.phonenumber)

        setUser_name(userData.user.username)

        setOrder_items(items)

        setOrder_basketTotal(basketTotal)

        setAmount(Number(basketTotal) + Number(delivery_fee))

        setOrder_status("Preparing")
       } catch (error) {
        console.log(error)
        
       }
        
    }

    React.useEffect(() => {
        fetchLSD()
    }, [])

    const postOrder = async () => {
      try {
        setIsLoading(true)
        await axios.post(`${Base_Url}/neworder`, {
            user_id: user_id,
            user_name: user_name,
            user_contact: user_contact,
            order_items: JSON.stringify(order_items),
            order_status: order_status,
            order_type: order_type,
            paymode: paymode,
            order_total: JSON.stringify(order_basketTotal),
            delivery_fee: delivery_fee,
            delivery_latitude: delivery_latitude,
            delivery_longitude: delivery_longitude,
        }, {headers: headers})
        .then(response => {
            console.log(response)
            showSuccess("order sent succesfully")
            navigation.navigate("PaymentSuccess")
            setIsLoading(false)
            setUser_id("")
            setUser_name("")
            setUser_contact("")
            setOrder_type("")
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
      } catch (error) {
        console.log(error)
        
      }
    }
 
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row justify-between items-center pt-2 py-2  px-2 border-b border-gray-200 bg-[#A020F0]">
            <TouchableOpacity onPress={navigation.goBack}>
                <ArrowLeftIcon size={24} color="#fff"/>
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
                                <Currency quantity={basketTotal} currency="UGX" pattern="##,### !"/>
                            </Text>
                    </View>

                    <View className="w-4/12">
                        <View className=" bg-black">
                            <Text className="font-bold text-white p-1">Delivery fee</Text>
                        </View>
                            <Text className="px-1 text-gray-600 font-bold p-1">
                                <Currency quantity={+delivery_fee} currency="UGX" pattern="##,### !"/>
                            </Text>
                    </View>
                </View>
            </View>

            <View className="pt-6">
                <Text className="text-gray-600 text-base font-extrabold">Preferred payment type</Text>
            </View>
            <View className="px-2 pb-4">
                <View className="flex-row items-center">
                    <RadioButton
                        value='cash'
                        color="#A020F0"
                        status={paymode === 'cash' ? 'checked' : 'unchecked' }
                        onPress={() => setPaymode('cash')}
                    />
                    <Text>Cash</Text>
                </View>

                <View className="flex-row items-center">
                    <RadioButton
                        value='momo'
                        color="#A020F0"
                        status={paymode === 'momo' ? 'checked' : 'unchecked' }
                        onPress={() => setPaymode('momo')}
                    />
                    <Text>Mobile Money</Text>
                </View>
            </View>

           {paymode === 'momo' ?
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
                            value={user_contact}
                            onChangeText={mobile => setMobile(mobile)}                        
                            className="text-purple-800 w-full h-12 px-2 bg-gray-200 rounded-md"
                        />
                        <View className="flex-row  space-x-1 pt-2">
                            <Text className="text-gray-700 text-center text-xs">Amount:</Text>
                        <Text className="text-gray-700 text-center text-xs">
                            <Currency quantity={amount} currency="UGX" pattern="##,### !"/>
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
            }
  
        </View>

        {paymode ? 
        <View className="flex-1 relative">
            <View className="items-center justify-center w-screen px-2 mb-2 bottom-0 absolute">
                <TouchableOpacity onPressIn={postOrder} className="bg-purple-600 rounded w-full">
                    <Text className="text-white text-base font-bold text-center px-3 py-3">Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
        :
        null
        }        
    </SafeAreaView>
  )
}

export default PaymentsScreen