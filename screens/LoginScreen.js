import { View, Text, Pressable, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center">
            <View>
                <Text className="font-bold text-purple-600 text-3xl pt-4 pb-12">Welcome</Text>
            </View>
            <View className="pb-2">
                <View className="pb-8">
                    <TextInput
                        placeholder="Phone Number"
                        className="text-purple-800 text-base w-96 h-11 px-2 bg-gray-200 rounded-md"
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Password"
                        className="text-purple-800 text-base w-96 h-11 px-2 bg-gray-200 rounded-md"
                    />
                </View>
            </View>
            <View className="pb-8">
                <Text className="text-sm text-purple-600 font-thin">forgot password?</Text>
            </View>

            <View className="pb-8 w-96">
                <Pressable onPress={() => navigation.navigate('Home')} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                    <Text className="text-white font-bold text-lg">Login</Text>
                </Pressable>
            </View>

            <View className="items-center">
                <Text className="text-sm">Don't have have an account?
                        <Text onPress={() => navigation.navigate('Signup')} className="items-baseline text-sm text-purple-600"> Sign Up</Text>
                </Text>

                <View className="flex-row items-center space-x-10 pt-4">
                    <Pressable className="shadow-sm bg-red items-center justify-center border rounded-md border-solid border-white">
                        <Image className="h-10 w-10 bg-white" source={{uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}}/>
                    </Pressable>

                    <Pressable className="shadow-sm bg-red items-center justify-center border rounded-md border-solid border-white">
                        <Image className="h-10 w-10 bg-white" source={{uri: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png"}}/>
                    </Pressable>
                </View>
            </View>

            <View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen