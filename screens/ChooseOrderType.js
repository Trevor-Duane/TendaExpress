import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react'
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from 'react-native-heroicons/solid';

const ChooseOrderType = () => {
const navigation =  useNavigation();
const [option, setOption] = useState("");
const [isSelected, setIsSelected] = useState(null);

const OrderTypes = [
  {
    id: 1,
    orderType: "Delivery",
    short_description: "order, make payment and wait for your delivery",
    value: "Delivery",
    iconActive: "https://cdn-icons-png.flaticon.com/512/3128/3128891.png",
    iconInactive: "https://cdn-icons-png.flaticon.com/512/3128/3128841.png"
  },
  {
    id: 2,
    orderType: "Dine-in",
    short_description: "order, make payment and come in ready to be served",
    value: "Dine-In",
    iconActive: "https://cdn-icons-png.flaticon.com/512/6774/6774898.png",
    iconInactive: "https://cdn-icons-png.flaticon.com/512/45/45332.png"
  },
  {
    id: 3,
    orderType: "Take Away",
    short_description: "order, make payment and come in ready to pick",
    value: "Pick-up",
    iconActive: "https://cdn-icons-png.flaticon.com/512/3081/3081144.png",
    iconInactive: "https://cdn-icons-png.flaticon.com/512/3081/3081314.png"
  },
]

let RestaurantLocation = [ 
  {
    "address_latitude": 0.18441485939905478,
    "address_longitude": 32.538370291740904
  }
]

let baseOrderFee = 0

useEffect(() => {
  const setType = async() => {
    await AsyncStorage.setItem('OrderType', option);
    let order_type = await AsyncStorage.getItem('OrderType')
    if(isSelected == 1 && isSelected == 2){
        await AsyncStorage.removeItem("pdistance")
        await AsyncStorage.setItem('pdistance', JSON.stringify(baseOrderFee))


    }
    console.log("OrderType", order_type)
    console.log(isSelected)
    console.log("theisslected", typeof(isSelected))
    console.log(option)
    console.log("theOption", typeof(option))

  };
  setType();
  
}, [isSelected])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 border-b border-[#D7A1F9] bg-white shadow-xs">
          <View>
            <Text className="font-extrabold text-lg text-center">{option} Order</Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack} className="top-3 right-3 absolute">
            <XCircleIcon size={40} color="#6C0BA9"/>
          </TouchableOpacity>
      </View>
      <View className="p-2 bg-gray-100 flex-column">
        <View className="flex-row items-center">
          {/* <InformationCircleIcon size={16} color="#A020F0"/> */}
          <Text className="text-base px-1">Please Choose Your Preferred Order Type</Text>
        </View>

        <View className="flex-row items-center mt-2">
          <InformationCircleIcon size={16} color="#A020F0"/>
          <Text className="text-base px-1 font-semibold">Order Types</Text>
        </View>

        {OrderTypes.map((order_type) => (
          <View key={order_type.id} className="mx-5 my-2 pt-1 border-b border-gray-300">
            <Text className="font-bold text-gray-500">{order_type.orderType} Order</Text>
            <Text className="text-[12px]">{order_type.short_description}</Text>
          </View>
        ))}
      </View>
      <View className="flex-1 p-2 bg-gray-100">
        {OrderTypes.map((ordertype, index) => (
          <TouchableOpacity
          onPress={() => {
            setIsSelected(ordertype.id)
            setOption(ordertype.value)
          }}
            key={ordertype.id}
            style={{
              flexDirection: 'row',
              height: 70,
              alignItems: 'center',
              marginTop: 8,
              paddingHorizontal: 4,
              borderWidth: 2,
              borderRadius: 6,
              backgroundColor: isSelected == ordertype.id ? '#FFFFFF' : '#E5E4E2',
              borderColor: isSelected == ordertype.id ? '#A020F0' : '#BEBEBE'
            }}
            
          >
              <View style={{
                width: 60,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                // borderWidth: 2,
                borderRadius: 6,
                // borderColor: 'gray'
              }}>
                  <Image
                    source={isSelected == ordertype.id ? {uri: ordertype.iconActive} : {uri: ordertype.iconInactive}}
                    resizeMode = 'contain'
                    style={{
                        width: 45,
                        height: 45
                    }}
                  />
                </View>

                <Text
                  className="text-lg font-bold"
                  style={{
                    flex: 1,
                    marginLeft:8
                  }}>
                    {ordertype.orderType}
                </Text>
                

                <View>
                  <CheckCircleIcon size={25} color={isSelected == ordertype.id ? "#A020F0" : "#BEBEBE"}/>
                </View>

      </TouchableOpacity>
      
        ))}
        <View className="absolute bottom-1 items-center justify-center w-screen px-2">
          <TouchableOpacity 
            // onPress={() => {navigation.navigate('Addaddress')}}
            onPress={() => {
              if(option === "Delivery"){
                navigation.navigate("Addaddress")
              } else {
                AsyncStorage.removeItem('pdistance')
                AsyncStorage.setItem('pdistance', JSON.stringify(baseOrderFee))
                AsyncStorage.removeItem('saddress')
                AsyncStorage.setItem('saddress', JSON.stringify(RestaurantLocation))
                navigation.navigate("Baskets")
                // navigation.navigate("Cart")

              }
              return
            }}
            className="bg-purple-600 rounded w-full">
            <Text className="text-white text-base font-bold text-center px-2 py-3">Place Order</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
  )
}

export default ChooseOrderType