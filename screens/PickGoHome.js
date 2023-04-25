import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PickGoMenu from '../components/PickGoMenu';

const PickGoHome = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="bg-white">
        <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        <View className="flex-row pb-1 items-center mx-2 justify-center pt-1">   
            <View className="flex-1">
                <Text className="text-2xl text-gray-800 font-bold text-center">Pick & Go</Text>
            </View>
        </View>

        <View className="mx-2">
            <Text className="text-gray-500 text-lg font-bold">Fast & Delicious{"\n"}Food</Text>
        </View>

        <PickGoMenu/>
    </SafeAreaView>
  )
}

export default PickGoHome