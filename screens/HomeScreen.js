import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from '../components/Categories';
import Offers from '../components/Offers';
import Popular from '../components/Popular';

const HomeScreen = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])

  return (
    <SafeAreaView className="bg-white">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-2 justify-between mt-6 pt-5">
               
                <View>
                    <Bars3Icon size={36} color="#000" className="p-4"/>
                </View>

                {/* <View>
                    <Text className="text-gray-500">Hi, Martin</Text>
                </View> */}

                <View>
                    <UserCircleIcon size={36} color="#000" className="p-4"/>
                </View>
            </View>

            {/* <View className="mx-4">
                <Text className="text-gray-800 text-2xl font-bold">Fast & Delicious{"\n"}Food</Text>
            </View> */}

            {/* search */}
            <View className="mx-2 pb-2">
                <View className="flex-row items-center space-x-2 bg-white shadow rounded-lg p-2">
                    <MagnifyingGlassIcon size={18} color="#a020f0" className="font-bold" />
                    <TextInput 
                        placeholder='Search for your fav food...'
                        keyboardType='default'
                    />
                </View>
            </View>
            
            {/* Body */}
            <ScrollView>
                {/* Categories */}
                <Text className="text-purple-800 text-xl mx-2">Categories</Text>
                <Categories/>
                {/* Offers Today */}
                <Offers/>
                {/* special */}
                <Popular/>

            </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen