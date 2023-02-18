import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCircleIcon, Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import AllMenu from '../components/AllMenu';

const PickGoHome = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="bg-white">
        <View className="flex-row pb-1 items-center mx-2 justify-between pt-1">   
            <View>
                <Bars3Icon size={36} color="#000"/>
            </View>

            <View>
                <Text className="text-lg text-gray-500">Hi, Martin</Text>
            </View>

            <View>
                <UserCircleIcon size={36} color="#000"/>
            </View>
        </View>

        <View className="mx-2">
            <Text className="text-gray-800 text-2xl font-bold">Fast & Delicious{"\n"}Food</Text>
        </View>

        <AllMenu/>
    </SafeAreaView>
  )
}

export default PickGoHome