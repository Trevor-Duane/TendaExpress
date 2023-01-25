import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import DishRow from '../components/DishRow'


import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid';
import BasketIcon from '../components/BasketIcon';
import { setCategory } from '../features/categorySlice';
import { useDispatch } from 'react-redux';

const CategoryScreen = () => {
    const navigation =  useNavigation();
    const dispatch = useDispatch();

    const {params:{
        id,
        image,
        name,
        dishes,
    }} = useRoute();

    useEffect(() => {
        dispatch(
            setCategory({
                id,
                image,
                name,
                dishes,
            })
        )
    }, [dispatch])

console.log("dishes", dishes)
  return (
   <SafeAreaView>
    <BasketIcon/>
    <ScrollView>
    <View className="relative">
        <Image source={{
            uri: image
        }}
        className="w-full h-56 p-4 rounded-t-xl bg-gray-300"
        />
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-gray-100 p-2 absolute left-3 top-4 rounded-full">
            <ArrowLeftIcon size={24} color="#6C0BA9" />
        </TouchableOpacity>
    </View>

    <View className="bg-white pb-2">
        <View className="px-2 py-1 items-start">
            <Text className="text-xl font-bold text-purple-600">Cafe Tenda {name}</Text>
        </View>
        <View className="px-2">
            <Text className="text-justify text-gray-500">
                Breakfast is the most important meal of the day. 
               So give your body some TLC and sit down 
                 and enjoy a good, substantial breakfast.
            </Text>
        </View>
    </View>

    <TouchableOpacity className="flex-row items-center space-x-2 p-2 border-y border-gray-200">
        <QuestionMarkCircleIcon size={20} color="gray" opacity={0.5}/>
        <Text className="flex-1">Your order type?</Text>
        <ChevronRightIcon color="#6C0BA9"/>
    </TouchableOpacity>

    <View className="bg-white">
        <Text className="px-2 py-1 text-xl font-bold mb-2">{name} Menu</Text>
    </View>

   <View className="pb-32">
     {/* dishesrow */}
     {dishes.map((dish) => (
        <DishRow
            key={dish.id}
            id={dish.id}
            name={dish.name}
            short_description={dish.short_description}
            image={dish.image}
            price={dish.price}
        />
    ))}
   </View>

   </ScrollView>
   </SafeAreaView>
  )
}

export default CategoryScreen