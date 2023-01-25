import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

import { ChevronLeftIcon, EllipsisHorizontalIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../features/categorySlice';
import { selectBasketItems } from '../features/basketSlice';

const CartScreen = () => {
  const navigation =  useNavigation();
  const category = useSelector(selectCategory);
  const items = useSelector(selectBasketItems);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[items.id] = results[items.id] || []).push(items);
      return results;
    }, {});
      setGroupItemsInBasket(groupedItems)

  }, [items])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-2">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeftIcon size={24} color="#6C0BA9"/>
          </TouchableOpacity>
          <Text className="flex-1 font-extrabold text-lg text-center">Basket</Text>
          <EllipsisHorizontalIcon size={24} color="#6C0BA9"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen