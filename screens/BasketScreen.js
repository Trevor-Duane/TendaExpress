import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter';
import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon, MapPinIcon, QuestionMarkCircleIcon, TrashIcon, XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../reducers/categorySlice';
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice';
import { removeFromBasket } from '../reducers/basketSlice';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BasketScreen = () => {
  const navigation =  useNavigation();
  const category = useSelector(selectCategory);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [delivery_distance, setDelivery_distance] = useState(0);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
      setGroupItemsInBasket(groupedItems)
      // console.log("grouped", groupedItems)

  }, [items])

  // console.log("groupedbasket", groupItemsInBasket)
  // console.log("items", items)
  
  useEffect(() => {
    const fetchDistance = async () => {
      const pdistance = parseInt(await AsyncStorage.getItem("pdistance"))
      console.log("first pdisatnce", pdistance)
      console.log(typeof(pdistance))
      if(pdistance && pdistance >= 0){
        setDelivery_distance(pdistance)

      }
      console.log("pdistance here", delivery_distance)
    }
    fetchDistance()
  })

  return (
    <SafeAreaView className="flex-1 bg-white">
        <StatusBar backgroundColor='#fff' barStyle="light-content"/>

      <View className="flex-1 p-2 bg-gray-100">
        <View className="p-5 border-b border-[#D7A1F9] bg-white shadow-xs">
          <View>
            <Text className="font-extrabold text-lg text-center">Basket</Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack} className="top-3 right-3 absolute">
            <XCircleIcon size={40} color="#6C0BA9"/>
          </TouchableOpacity>
        </View>

        {/* <View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-2 border-y border-gray-200">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.5}/>
            <Text className="flex-1">Your order type</Text>
            <ChevronRightIcon color="#6C0BA9"/>
          </TouchableOpacity>
        </View>
        <View className="bg-white p-1"></View>
        <View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-2 border-y border-gray-200">
            <MapPinIcon size={20} color="#6c0ba9" opacity={0.5}/>
            <Text className="flex-1">Delivery Address</Text>
            <ChevronRightIcon color="#6C0BA9"/>
          </TouchableOpacity>
        </View> */}
        
        <ScrollView className="divide-y divide-purple-400">
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#51087E] text-base">{items.length} X</Text>
              <Image 
                source={{
                  uri: items[0]?.item_image
                }}

                className="h-14 w-14 rounded-full"
                />

                <Text className="flex-1">{items[0]?.item_name}</Text>

                <Text className="text-[#51087E]">
                  <Currency quantity={Number(items[0]?.item_price)} currency="UGX" pattern="##,### !"/>
                </Text>

                <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
                  <TrashIcon size={20} color="#51087E"/>
                </TouchableOpacity>
            </View>
          ))}

          <View style={{ display: items.length == 0  ? "flex" : "none"}}>
            <Text className="text-base text-gray-600 text-center p-4">No items in basket</Text>
          </View>
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-[#51087E]">
              <Currency quantity={Number(basketTotal)} currency="UGX" pattern="##,### !"/>
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-[#51087E]">
              <Currency quantity={Number(0.02*basketTotal)} currency="UGX" pattern="##,### !"/>
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="text-[#51087E] font-bold">
              <Currency quantity={Number(basketTotal+(0.02*basketTotal))} currency="UGX" pattern="##,### !"/>
            </Text>
          </View>

        <TouchableOpacity className="rounded-lg bg-purple-600 p-2" style={{ display: items.length == 0  ? "none" : "flex"}} onPress={() => navigation.navigate('Chooseordertype')}>
                <Text className="text-white text-center font-bold text-lg">Place Order</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen