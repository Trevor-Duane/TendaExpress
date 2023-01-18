import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from '../components/Categories';
import ChefSpecial from '../components/ChefSpecial';
import Menu from '../components/Menu';

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

                <View>
                    <UserCircleIcon size={36} color="#000" className="p-4"/>
                </View>
            </View>

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
            <ScrollView nestedScrollEnabled={true}>

                {/* Categories */}
                <Categories/>

                {/* Offers Today */}
                <View>
                    <ChefSpecial id="1" title="Chef's Special" description="All the special dishes in one place"/>
                </View>

                {/* All items */}      
                <ScrollView horizontal={true}>
                    <Menu id="2" title="Our Menu" description="Everything all at once"/>
                </ScrollView>
            </ScrollView>
            

    </SafeAreaView>
  )
}

export default HomeScreen