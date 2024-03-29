import { View, Text, Pressable, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const PickGoLogin = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
        <View className="flex-1 items-center justify-center">

            <View className="items-center pt-4">
                <Text className="font-bold text-white text-5xl">Pick & Go</Text>
            </View>

            <View className="items-center pb-8">
                <Text className="text-gray-300 w-60 text-center pt-2">Quickly order for your favourite item from our "pick & go" menu and just drive by and pick your order</Text>
            </View>

            <View className="pb-6">
              <TextInput
                  placeholder="Name"
                  className="text-purple-800 text-base h-12 w-96 px-2 bg-gray-200 rounded-md"
              />
            </View>

            <View className="pb-6">
                <TextInput
                    placeholder="Phone Number"
                    className="text-purple-800 text-base h-12 w-96 px-2 bg-gray-200 rounded-md"
                />
            </View>


            <View className="pb-4 px-3 w-screen">
                <Pressable onPress={() => navigation.navigate('Pickgohome')} className="bg-black py-3 items-center justify-centerborder rounded-md border-solid border-white">
                    <Text className="text-white font-bold text-xl">Continue</Text>
                </Pressable>
            </View>
            
         </View>   
    </SafeAreaView>
  )
}

export default PickGoLogin