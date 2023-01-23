import { View, Text, Image, Button, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import startImage from '../assets/images/preview.png'
import { StatusBar } from 'expo-status-bar';

const GetStarted = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
        <StatusBar className="bg-purple-600" barStyle="light-content"/>
        <View className="flex-1 items-center content-between bg-purple-600">
            <View className="pb-8">
                <Text className="text-center text-white text-2xl pt-5 pb-4">TendaExpress</Text>
                <Image source={startImage} className="h-52 w-72"/>
                <Text className="text-center text-white pt-5">All your favourite {"\n"}foods</Text>
                <Text className="text-center text-white pt-3">Delivered fast to your door</Text>
            </View>
 
            <View className="pb-3 w-96">
                <Pressable onPress={() => navigation.navigate('Login')} className="bg-white py-3 items-center justify-center rounded-md ">
                    <Text className="text-purple-800 font-bold text-lg">Get Started</Text>
                </Pressable>
            </View>

            <View className="pb-8 w-96">
                <Pressable onPress={() => navigation.navigate('Pickgo')} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                    <Text className="text-white font-bold text-lg">Pick & Go</Text>
                </Pressable>
            </View>
        
            <View className="mt-4 items-center">
                <View>
                    <Text className="bottom-1 text-center text-white bg-purple-600">Signin with</Text>
                </View>
                <View className="flex-row items-center space-x-2 mt-1">
                    <Image className="h-5 w-5" source={{uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}}/>
                    <Image className="h-5 w-5" source={{uri: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png"}}/>
                </View>
                <View className="mt-6">
                    <Text className="text-white">Don't have an account? <Text className="text-black">Signup</Text></Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default GetStarted