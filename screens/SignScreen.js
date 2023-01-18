import { View, Text, TextInput, Pressable, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const SignScreen = () => {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
        <View className="flex-1 bg-purple-600">
            <View className="items-center pt-6 pb-4">
                <Text className="font-bold text-white text-2xl">TendaExpress</Text>
            </View>
            <View className="flex-1 bg-white rounded-t-3xl px-4">
                <View className="items-center">
                    <Text className="font-bold text-purple-600 pt-2 pb-4 text-2xl">Create Account</Text>
                </View>
                <View>
                    <View className="pb-6">
                        <TextInput
                            placeholder="Email"
                            className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                        />
                    </View>

                    <View className="pb-6">
                        <TextInput
                            placeholder="Phone Number"
                            className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                        />
                    </View>

                    <View className="pb-6">
                        <TextInput
                            placeholder="Username"
                            className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                        />
                    </View>

                    <View className="pb-6">
                        <TextInput
                            placeholder="Your Address"
                            className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                        />
                    </View>

                    <View className="pb-6">
                        <TextInput
                            placeholder="Password"
                            className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                        />
                    </View>
                </View>

                <View className="pb-4 w-96">
                    <Pressable className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                        <Text className="text-white font-bold text-lg">Register</Text>
                    </Pressable>
                </View>

                <View className="items-center">
                    <Text className="text-sm text-gray-400">or connect with</Text>
                    <View className="flex-row items-center space-x-10 pt-2 pb-4">
                        <Pressable className="shadow-sm bg-red items-center justify-center border rounded-md border-solid border-white">
                            <Image className="h-8 w-8 bg-white" source={{uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}}/>
                        </Pressable>

                        <Pressable className="shadow-sm bg-red items-center justify-center border rounded-md border-solid border-white">
                            <Image className="h-8 w-8 bg-white" source={{uri: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png"}}/>
                        </Pressable>
                    </View>
                    <Text className="text-sm">Already have have an account? <Text onPress={() => navigation.navigate('Login')}className="text-sm text-purple-600"> Login</Text></Text>

                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SignScreen