import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import DishRow from '../components/DishRow'
import axios from 'axios';
import Base_Url from '../constants/api';
import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { Items } from '../models/Items';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import BasketIcon from '../components/BasketIcon';
import { setCategory } from '../features/categorySlice';
import { useDispatch } from 'react-redux';

const CategoryScreen = () => {

    const[selectedSubCategory, setSelectedSubCategory] = React.useState(null);
    const[dishes, setDishes] = React.useState([]);
    const [Subcategories, setSubcategories] = React.useState([]);


    const headers = {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        }

    const navigation =  useNavigation();

    const {params:{
        id,
        category_image,
        category_name,
        category_description,
    }} = useRoute();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setCategory({
                id,
                category_image,
                category_name,
                category_description,
            })
        )
    }, [dispatch])

    //fetch subcategories
    const fetchSubcategories = async () => {
    await axios.get(`${Base_Url}/subcategory/${id}`, {headers: headers})
    .then((response) => {
        console.log(response.data)
        setSubcategories(response.data.data)
    })
    .catch(err => {
        console.error(err)
        console.log("error", err.message)
    })
    
    }
    useEffect(() => {
    fetchSubcategories()
    }, [id, selectedSubCategory])
  return (
   <SafeAreaView>
    <BasketIcon/>
    <ScrollView>
    <View className="relative">
        <Image source={{
            uri: category_image
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
            <Text className="text-xl font-bold text-purple-600">Cafe Tenda {category_name}</Text>
        </View>
        <View className="px-2">
            <Text className="text-justify text-gray-500">
                Breakfast is the most important meal of the day. 
               So give your body some TLC and sit down 
                 and enjoy a good, substantial breakfast.
            </Text>
        </View>
    </View>

    <View className="bg-white">
        <Text className="px-2 py-1 text-xl font-bold mb-2">{category_name} Menu</Text>
    </View>

    <View className="space-x-2 p-2 border-y border-gray-200">
        <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
            }}
        >
            {Subcategories.map((subcategory) => (
                <View key={subcategory.id} className="px-1">
                    <TouchableOpacity className="bg-purple-600 rounded px-1 py-1" value={subcategory.id} onPress={() => {
                        setSelectedSubCategory(subcategory.id)
                        setDishes(subcategory.items)
                    }}>
                        <Text style={{color: selectedSubCategory == subcategory.id ? '#E2C0F8' : '#fff'}} className="py-1 text-white font-bold text-base capitalize">{subcategory.subcategory_name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    </View>

    {/* <TouchableOpacity className="flex-row items-center space-x-2 p-2 border-y border-gray-200">
        <QuestionMarkCircleIcon size={20} color="gray" opacity={0.5}/>
        <Text className="flex-1">Your order type?</Text>
        <ChevronRightIcon color="#6C0BA9"/>
    </TouchableOpacity> */}

   

   <View className="pb-32">
     {/* dishesrow */}
     {dishes.map((dish) => (
        <DishRow
            key={dish.id}
            id={dish.id}
            subcategory_id={dish.subcategory_id}
            name={dish.item_name}
            short_description={dish.item_description}
            image={dish.item_image}
            price={dish.item_price}
        />
    ))}
   </View>

   </ScrollView>
   </SafeAreaView>
  )
}

export default CategoryScreen