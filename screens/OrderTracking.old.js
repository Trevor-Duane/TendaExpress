import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import dotted from '../assets/images/dotted-barline.png'
import React from 'react'
import { ArrowLeftIcon, CheckCircleIcon, ClockIcon, MapIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';


export default function OrderTracking({ route, navigation }) {
     const statuses = [
        {
            id: "1",
            title: "Order Confirmed",
            sub_title: "Your order has been recieved",
            value: "comfirmed"
        },
        {
            id: "2",
            title: "Order Prepared",
            sub_title: "Your order has been prepared",
            value: "prepared"
        },
        {
            id: "3",
            title: "Deliver in progress",
            sub_title: "Your food is on the way",
            value: "delivering"
        },
        {
            id: "4",
            title: "Delivered",
            sub_title: "Enjoy your meal",
            value: "delivered"
        },
        {
            id: "5",
            title: "Feedback",
            sub_title: "Help us improve our service",
            value: "feedback"
        },
    ]

    let {duration} = route.params;

    const [currentStep, setCurrentStep] = React.useState(0);


  return (
    <SafeAreaView className="flex-1 bg-white">
    <StatusBar backgroundColor='#ffffff' barStyle="light-content"/>
        <View className="flex-row items-center mx-2 justify-between">
            <View>
                <Pressable onPress={() => navigation.goBack()} className="justify-center items-center">
                    <ArrowLeftIcon size={24} color="#6C0BA9"/>
                </Pressable>
            </View>
            <View>
                <Text className="p-4 text-lg font-bold text-purple-600">Delivery Status</Text>
            </View>
        </View>

        <View className="bg-purple-600 rounded-lg justify-between">
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center px-2 py-1">
                    <View>
                        <ClockIcon size={18} color="#ffffff"/>
                    </View>
                    <View>
                        <Text className="text-lg text-white font-medium px-1">Approx {Math.ceil(duration)} mins</Text>
                    </View>
                </View>
                <View className="px-2 py-1">
                    <Text className="text-lg text-white font-medium">Delivery Order</Text>
                </View>
            </View>

            <View className="pt-6">
                <Text className="pb-4 px-2 text-lg text-white font-medium">Tenda House, 1st floor, Bwebajja, Ebbs</Text>
            </View>
        </View>

        <View className="px-2 py-1">
            <Text className="text-gray-500 text-xl font-extrabold">Delivering Status</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="mt-1 py-1 border border-gray-100 bg-gray-200">
                <View className="flex-row items-center justify-between mb-5 px-2">
                    <Text>Track order</Text>
                    <Text>ID: 20033737</Text>
                </View>

                <View className="border border-t-2 border-gray-300">
                {statuses.map((item, index) => {
                    return(
                        <View key={`StatusList-${item.id}`}>
                            <View className="flex-row items-center">
                                <CheckCircleIcon size={32}  style={{color: index <= currentStep ? "#A020f0" : "#808080"}}/>

                                <View className="pl-2">
                                    <Text className="text-base font-bold">{item.title}</Text>
                                    <Text className="text-xs text-gray-500">{item.sub_title}</Text>
                                </View>
                            </View>
                            {index < statuses.length - 1 && 
                                <View className="h-12 w-[2px] ml-3 bg-purple-600 z-[-1]"></View>
                            }
                            {index >= currentStep &&
                                <View className="h-12 w-[2px] ml-3 bg-gray-400"></View>
                                // <Image
                                //     source={dotted}
                                //     className="w-[4px] h-[50px] ml-3"/>
                            }
                        </View>
                    )
                })}
                </View>

            </View>

        </ScrollView>

        <View className="absolute bottom-0 right-0">
            <View className="items-center justify-center px-2 mb-2">
                <TouchableOpacity onPress={() => navigation.navigate('Map')} className="bg-purple-600 rounded w-full flex-row items-center justify-center">
                    <MapIcon size={24} color="#ffffff"/>
                    <Text className="text-white text-base font-bold text-center px-3 py-2">Map View</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}