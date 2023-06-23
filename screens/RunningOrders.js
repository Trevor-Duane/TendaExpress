import { View, Text, Image, ScrollView} from 'react-native'
import * as Progress from 'react-native-progress'
import React from 'react'
import servingDish from '../assets/images/serving-dish2.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';
import { StatusBar } from 'expo-status-bar';
import { Base_Url } from '../constants/api';
import axios from 'axios';
import headers from '../constants/headers';
import { useSelector } from 'react-redux'
import { ArrowLeftIcon, Bars3BottomLeftIcon, PhoneIcon } from 'react-native-heroicons/solid';

const RunningOrders = () => {
    const navigation =  useNavigation();
    const userData = useSelector((state) => state.auth.userData);

    const [orders, setOrders] = React.useState([])
    const [active, setActive] = React.useState([])
    const [user_id, setUser_id] = React.useState(userData.user.id)

    const [isLoading, setIsLoading] = React.useState(false)


    //fetch active orders by user_id
    const fetchNewOrders = async () => {
       try {
        setIsLoading(true)
        await axios.get(`${Base_Url}/neworders/${user_id}`, {headers: headers})
        .then(response => {
            console.log(response.data)
            setOrders(response.data.data)
            setIsLoading(false)

            // const myOrders = orders.filter(order => order.order_status === "Preparing" || order.order_status === "Delivering")
            // console.log("________________________________________________________________________________")
            // console.log(myOrders)
            // console.log("________________________________________________________________________________")
            // setActive(myOrders)
        })
        .catch(err => {
            setIsLoading(false)
            console.error(err)
            console.log("error", err.message)
        })
       } catch (error) {
            setIsLoading(false)
            console.log(error)


       }
    }

    React.useEffect(() => {
    fetchNewOrders()
    }, [user_id])

    const OrderCard = ({id, order_id, order_status, order_total}) => {
        return(
            <View>
                <View className="bg-white border-b border-purple-300 rounded">
                    <View className="flex-row items-center space-x-1 p-2 ">
                        <View className="border border-gray-200 rounded">
                            <Image  className="h-14 w-14 rounded" source={servingDish}/>
                        </View>

                        <View className="items-start space-y-1 flex-1 h-full">
                            
                            <View className="flex-row justify-between items-center w-full">
                                <View className="flex-row items-center space-x-2">
                                    <Text className="text-xs text-gray-600">Order ID:</Text>
                                    <Text className="text-xs text-gray-500">CafeTenda/{order_id}</Text>
                                </View>
                            </View> 

                            <View className="flex-row items-center space-x-2">
                                <Text className="text-xs text-gray-600">Items Total:</Text>
                                <Text className="text-[#7A4988] text-xs font-bold">
                                    <Currency quantity={+order_total} currency="UGX" pattern="##,### !"/>
                                </Text>
                            </View>
                            
                            <View className="flex-row items-center space-x-2">
                                <Text className="text-xs text-gray-600">Status:</Text>
                                <Text className="text-xs text-gray-500">{order_status}</Text>
                            </View>

                                                  
                        </View>

                        <View>
                            <View className="rounded-full bg-[#E2C0F8] p-1">
                                    <PhoneIcon size={20} color="#A020F0"/>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row justify-between items-center p-1 bg-gray-200">
                        <View>
                            <Text className="text-xs text-gray-500 font-bold">{`Order ${order_status}`}</Text>
                        </View>
                        <View>
                            <Progress.Bar progress={0.3} width={180} height={4} borderRadius={2} indeterminate={true} color="#7A4988"/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020F0' barStyle="light-content"/>
        {/* Header */}

        <View className="flex-row justify-between items-center">
            <View className="p-2">
                <Text className="text-xl font-black  text-white">Confirmed Orders</Text>
            </View>
            <View className="flex-row justify-around items-center gap-2 p-2">
                {/* <Text className="bg-[#A020F0] text-white font-bold py-1 px-3 rounded-2xl">Active</Text> */}
                <Text className="bg-gray-100 text-[#A020F0] py-1 px-3 rounded-xl">Active Orders</Text>
            </View>
        </View>

        {isLoading ? 
        <View className="items-center justify-center flex-1">
            <View className="items-center justify-center">
                <Progress.Circle size={40} indeterminate={true} borderWidth={2} color="#ffffff"/>
            </View>
        </View>
        :
            <View className="flex-1 bg-gray-100">
            {orders.length === 0 ? (
            <View className="flex-1 justify-center items-center">
                <View className="items-center justify-center">
                <MaterialCommunityIcons name="radar" color="#E2c0F8" size={96} />
                <Text className="text-base text-gray-600 text-center">Sorry, No Active Orders</Text>
                </View>
            </View>
            ) : (
                <ScrollView>
                {orders.filter(order => order.order_status === "Preparing" || order.order_status === "New" || order.order_status === "Delivering").map(o => 
                // {active.map(o => 
                        <OrderCard
                        key={o.id}
                        order_id={o.id}
                        order_status={o.order_status}
                        order_total={o.order_total}
                    />
                    )}
                </ScrollView>
            )}    
            </View>

        }

    </SafeAreaView>
  )
}

export default RunningOrders