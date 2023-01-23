import { View, Text, TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const navigation =  useNavigation();

  return (
    <View className="absolute bottom-6 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} className="bg-purple-300 flex-row p-4 mx-4 rounded-lg items-center space-x-2">
        <Text className="text-purple-600 font-extrabold text-lg bg-[#51087E] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-[#51087E] font-extrabold">
              <Currency quantity={basketTotal} currency="UGX" pattern="##,### !"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon