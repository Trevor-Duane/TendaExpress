import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import CategoriesComponent from '../components/CategoriesComponent';
import ChefSpecial from '../components/ChefSpecial';
import Menu from '../components/Menu';
import NavDrawer from '../components/NavDrawer';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
    

  return (
    <SafeAreaView className="flex-1 bg-white">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}

         <View className="bg-[#A020F0]">
               <View className="flex-row pb-3 items-center mx-2 mt-5 justify-between">
                    <View>
                        <Bars3Icon 
                            onPress={() => navigation.openDrawer()} title='left drawer'
                            size={32} 
                            color="#fff"
                        />
                    </View>

                    <View className="flex-1">
                        <Text className="font-extrabold text-xl text-center text-white">Menu</Text>
                    </View>
                </View>
         </View>

         {/* Body */}
         <ScrollView nestedScrollEnabled={true}>

        {/* Categories */}
            <CategoriesComponent/>

       
        </ScrollView>
            

    </SafeAreaView>
  )
}

export default HomeScreen