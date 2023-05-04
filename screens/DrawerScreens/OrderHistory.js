import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, Bars3BottomLeftIcon, PhoneIcon } from 'react-native-heroicons/solid';
import Currency from 'react-currency-formatter';
import headers from '../../constants/headers';
import { Base_Url } from '../../constants/api';
import axios from 'axios';
import { useSelector } from 'react-redux'


const OrderHistory = () => {
    const navigation =  useNavigation();
    const userData = useSelector((state) => state.auth.userData);

    const [orders, setOrders] = React.useState([])
    const [user_id, setUser_id] = React.useState(userData.user.id)


    //fetch active orders by user_id
    const fetchNewOrders = async () => {
       try {
        await axios.get(`${Base_Url}/neworders/${user_id}`, {headers: headers})
        .then(response => {
            console.log(response.data)
            setOrders(response.data.data)
        })
        .catch(err => {
            console.error(err)
            console.log("error", err.message)
        })
       } catch (error) {
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
                        <View>
                            <Image  className="h-14 w-14 rounded" source={{uri: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"}}/>
                        </View>

                        <View className="items-start space-y-1 flex-1 h-full">
                            
                            <View className="flex-row justify-between items-center w-full">
                                <View className="flex-row items-center space-x-2">
                                    <Text className="text-xs text-gray-600">Order ID:</Text>
                                    <Text className="text-xs text-gray-500">CafeTenda/{order_id}</Text>
                                </View>
                            </View> 

                            <View className="flex-row items-center space-x-2">
                                <Text className="text-xs text-gray-600">Order Total:</Text>
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
                                    <PhoneIcon size={20} color="#E2C0F8"/>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row justify-between items-center p-1 bg-gray-200">
                        <View>
                            <Text className="text-xs text-gray-500 font-bold">{`Order ${order_status}`}</Text>
                        </View>
                        <View>
                            <Progress.Bar progress={1} width={180} height={4} borderRadius={2} indeterminate={false} color="#7A4988"/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}
         <View className="bg-[#A020F0]s">
               <View className="flex-row items-center px-2 pt-2 pb-1 justify-between">
                    <TouchableOpacity className="rounded px-1 shadows" onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon 
                            size={20} 
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <View className="flex-1">
                        <Text className="font-extrabold text-xl text-center text-white">Order History</Text>
                    </View>
                </View>
         </View>

         <View className="flex-1 bg-gray-200">
            <ScrollView>
                {orders.filter(order => order.order_status === "Completed").map(o => 
                    <OrderCard
                    key={o.id}
                    order_id={o.id}
                    order_status={o.order_status}
                    order_total={o.order_total}
                />
                )}
            </ScrollView>
         </View>

    </SafeAreaView>
  )
}

export default OrderHistory