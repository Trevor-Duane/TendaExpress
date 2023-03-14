import { View, Text, TextInput, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';

import validator from '../utils/validator';
import { showError, showSuccess } from '../utils/helperFunction';
import actions from '../actions';
import { ActivityIndicator } from 'react-native';

const SignScreen = () => {
    const navigation =  useNavigation();

    const [state, setState] = useState({
        isLoading: false,
        email: '',
        phonenumber: '',
        username: '',
        address: '',
        password: '',
        password_confirmation: '',
        isSecure: true
    });

    const { isLoading, email, phonenumber, username, address, password, password_confirmation, isSecure } = state

    const updateState = (data) => setState(() => ({...state, ...data}))

    const isValidData = () => {
        const error = validator({
            email,
            phonenumber,
            username,
            address,
            password,
            password_confirmation,
        })
        if(error) {
            showError(error)
            return false
        }
        return true
    }

    const onRegister = async() => {
       const checkValid = isValidData()
       if(checkValid){
            updateState({isLoading: true})
            try {
                const res = await actions.register({
                    email,
                    phonenumber,
                    username,
                    address,
                    password,
                    password_confirmation,
                })
                console.log("res===> of signup", res)
                showSuccess("Account Created Successfully")
                navigation.navigate("Login")
                updateState({isLoading: false})
            } catch (error) {
                console.log("error raise")
                showError(error.message)
                updateState({isLoading: false})
                
            }

       }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
        <StatusBar className="bg-purple-600" barStyle="light-content"/>
        <View className="flex-1 bg-purple-600">
            <View className="items-center pt-6 pb-4">
                <Text className="font-bold text-white text-2xl">TendaExpress</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" className="flex-1 bg-white rounded-t-3xl px-4">
                <View className="items-center">
                    <Text className="font-bold text-purple-600 pt-2 pb-4 text-2xl">Create Account</Text>
                </View>
                <ScrollView>  
                    <View>
                        <View className="pb-6">
                        <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Email"
                                    autoCapitalize='none'
                                    onChangeText={(email) => updateState({ email })}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                {/* <Animatable.View anim                                                  ation="slideInRight" style={{position: 'absolute', right:3}}>
                                    {checkValid ? 
                                        <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                    : null}
                                </Animatable.View> */}
                        </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Phone Number"
                                    autoCapitalize='none'
                                    onChangeText={(phonenumber) => updateState({ phonenumber })}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                {/* <Animatable.View animation="slideInRight" style={{position: 'absolute', right:3}}>
                                    {checkValid ? 
                                        <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                    : null}
                                </Animatable.View> */}
                            </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <View className="flex-row items-center relative">
                                    <TextInput
                                        placeholder="Username"
                                        autoCapitalize='none'
                                        onChangeText={(username) => updateState({ username })}
                                        className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                    />
                                    {/* <Animatable.View animation="slideInRight" style={{position: 'absolute', right:5}}>
                                        {checkValid ? 
                                            <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                        : null}
                                    </Animatable.View> */}
                                </View>
                            </View>
                        </View>

                        <View className="pb-6">
                        <View className="flex-row items-center relative">
                            <TextInput
                                    placeholder="Your Address"
                                    autoCapitalize='none'
                                    onChangeText={(address) => updateState({ address })}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                {/* <Animatable.View animation="slideInRight" style={{position: 'absolute', right:3}}>
                                    {checkValid ? 
                                        <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                    : null}
                                </Animatable.View> */}
                        </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Password"
                                    onChangeText={(password) => updateState({ password })}
                                    secureTextEntry={isSecure}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                <TouchableOpacity className="items-center absolute right-3" onPress={() => updateState({ isSecure: !isSecure  })}>
                                    {isSecure ?
                                    <EyeSlashIcon size={24} color="grey" />
                                    :
                                    <EyeIcon size={24} color="grey" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Confirm Password"
                                    onChangeText={(password_confirmation) => updateState({ password_confirmation })}
                                    secureTextEntry={isSecure}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                <TouchableOpacity className="items-center absolute right-3" onPress={() => updateState({ isSecure: !isSecure  })}>
                                    {isSecure ?
                                    <EyeSlashIcon size={24} color="grey" />
                                    :
                                    <EyeIcon size={24} color="grey" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>

                <View className="mb-4 w-96">
                    <Pressable onPress={onRegister} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                        {!isLoading ? <Text className="text-white font-bold text-lg">Register</Text> 

                            : <ActivityIndicator size="small" color="white" />
                        }

                    </Pressable>


                    <View className="items-center py-1">
                    {/* <Text className="text-sm text-gray-400">or connect with</Text> */}
                    {/* <View className="flex-row items-center space-x-10 pt-2 pb-4">
                        <Pressable className="shadow-sm bg-red items-center justify-center border rounded-md border-solid border-white">
                            <Image className="h-8 w-8 bg-white" source={{uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}}/>
                        </Pressable>

                        <Pressable className="shadow-sm bg-red items-center justify-center border rounded-md border-solid border-white">
                            <Image className="h-8 w-8 bg-white" source={{uri: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png"}}/>
                        </Pressable>
                    </View> */}
                    <Text className="text-sm">Already have have an account? <Text onPress={() => navigation.navigate('Login')}className="text-sm text-purple-600"> Login</Text></Text>

                </View>
                </View>

                
            </Animatable.View>
        </View>
    </SafeAreaView>
  )
}

export default SignScreen