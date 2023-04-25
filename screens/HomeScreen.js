import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, Bars3Icon, MagnifyingGlassIcon, Bars3BottomLeftIcon } from "react-native-heroicons/solid";
import CategoriesComponent from '../components/CategoriesComponent';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
    

  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}
         <View className="bg-[#A020F0]">
               <View className="flex-row items-center px-2 pt-2 justify-between">
                    <View>
                        <Bars3BottomLeftIcon 
                            onPress={() => navigation.openDrawer()} title='left drawer'
                            size={28} 
                            color="#fff"
                        />
                    </View>

                    <View className="flex-1">
                        <Text className="font-extrabold text-2xl text-center text-white">Menu</Text>
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