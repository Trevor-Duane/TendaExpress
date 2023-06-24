import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import DishRow from '../components/DishRow'
import axios from 'axios';
import {Base_Url} from '../constants/api';
import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { Items } from '../models/Items';
import { ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/solid';
import BasketIcon from '../components/BasketIcon';
import { setCategory } from '../reducers/categorySlice';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';


const CategoryScreen = () => {

    const[selectedSubCategory, setSelectedSubCategory] = React.useState(null);
    const[dishes, setDishes] = React.useState([]);
    const [Subcategories, setSubcategories] = React.useState([]);

    const dropdownRef = React.useRef({});


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
    }, [dispatch, id, category_image, category_name, category_description])

    //fetch subcategories
    const fetchSubcategories = async () => {
    try {
        await axios.get(`${Base_Url}/subcategory/${id}`, {headers: headers})
        .then((response) => {
            console.log(response.data)
            if(response.data != null){
                setSubcategories(response.data.data)
                // setSelectedSubCategory(Subcategories[0].id)
                // setDishes(Subcategories[0].items)
            }
            
        })
        .catch(err => {
            console.error(err)
            console.log("error", err.message)
        })
    } catch (error) {
        console.log(error)
        
    }
    
    }
    useEffect(() => {
        fetchSubcategories()
    }, [id])
  return (
   <SafeAreaView>
    <StatusBar className="bg-white" barStyle="light-content"/>
    <BasketIcon/>
    <ScrollView>
    <View className="relative pt-2">
        <Image source={{
            uri: category_image
        }}
        className="w-full h-56 p-4 rounded-t-xl bg-gray-300"
        />
        <TouchableOpacity 
            onPress={() => {
                setDishes([])
                dropdownRef.current.reset()
                setSelectedSubCategory(null)
                navigation.goBack()
            }}
            className="bg-gray-100 p-2 absolute left-3 top-4 rounded-full">
            <ArrowLeftIcon size={20} color="#6C0BA9" />
        </TouchableOpacity>
    </View>

    <View className="bg-white pb-2">
        <View className="px-2 py-1 items-start">
            <Text className="text-xl font-bold text-[#6C0BA9]">{category_name} Menus</Text>
        </View>
        <View className="px-2">
            <Text className="text-justify text-gray-500">
                Breakfast is the most important meal of the day. 
                So give your body some TLC and sit down 
                and enjoy a good, substantial breakfast.
            </Text>
        </View>
    </View>

    {/* <View className="bg-white">
        <Text className="px-2 py-1 text-xl font-bold mb-2">{category_name} Menu</Text>
    </View> */}

    <View className=" border-gray-200">
        <ScrollView
                // horizontal
                showsHorizontalScrollIndicator={false}
                alwaysBounceVertical={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
            }}
        >
            {/* {Subcategories.map((subcategory) => (
                <View key={subcategory.id} className="my-1">
                    <TouchableOpacity className="bg-purple-600 rounded px-1 py-2" value={subcategory.id} onPress={() => {
                        setSelectedSubCategory(subcategory.id)
                        setDishes(subcategory.items)
                    }}>
                        <Text style={{color: selectedSubCategory == subcategory.id ? '#E2C0F8' : '#fff'}} className="py-1 text-white font-bold text-base capitalize">{subcategory.subcategory_name}</Text>
                    </TouchableOpacity>
                </View>
            ))} */}

            <SelectDropdown
                data={Subcategories}
                ref={dropdownRef}
                defaultButtonText={selectedSubCategory == null ? 'Select Subcategory' : Subcategories.find(x => x.id == selectedSubCategory).subcategory_name}
                onSelect={(selectedItem, index) => {
                    setSelectedSubCategory(selectedItem.id)
                    setDishes(selectedItem.items)
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem.subcategory_name;
                }}

                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item.subcategory_name;
                }}
                renderDropdownIcon={isOpen => { return isOpen ? <ChevronUpIcon size={20} color="#6C0BA9"/> : <ChevronDownIcon size={20} color="#6C0BA9"/>}}
                dropdownIconPosition={'right'}
                buttonStyle={{
                    height: 40,
                    width: '100%',
                    backgroundColor: '#E2c0f8',
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: '#6C0BA9',

                }}
                buttonTextStyle={{
                    textAlign: 'left',
                    color: '#6C0BA9',
                }}
                dropdownStyle={{
                    backgroundColor: '#EFEFEF',
                }}
                rowStyle={{
                    borderBottomColor: '#C5C5C5',
                }}
                rowTextStyle={{
                    textAlign: 'left',
                }}
                />
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
            item_name={dish.item_name}
            item_description={dish.item_description}
            item_image={dish.item_image}
            item_price={dish.item_price}
        />
    ))}
   </View>

   </ScrollView>
   </SafeAreaView>
  )
}

export default CategoryScreen