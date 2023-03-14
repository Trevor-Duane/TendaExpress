import { View, Text, TouchableOpacity } from 'react-native'
import Currency from 'react-currency-formatter';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const navigation =  useNavigation();
  
  return (
    <View className={`absolute bottom-4 w-full z-50`} style={{ display: items.length == 0  ? "none" : "flex"}}>
      <TouchableOpacity onPress={() => navigation.navigate('Baskets')} className="bg-purple-300 flex-row p-3 mx-3 rounded-lg items-center space-x-2">
        <Text className="text-white font-extrabold text-lg bg-[#51087E] py-1 px-2 rounded-md">{items.length}</Text>
        <Text className="flex-1 font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-[#51087E] font-extrabold">
              <Currency quantity={basketTotal} currency="UGX" pattern="##,### !"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon