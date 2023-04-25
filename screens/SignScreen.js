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
            
            <Animatable.View animation="fadeInUpBig" className="flex-1 bg-white rounded-t-3xl">
                <View className="items-center">
                    <Text className="font-bold text-purple-600 pt-2 pb-4 text-2xl">Create Account</Text>
                </View>

                <ScrollView>  
                        
                    <View className="px-2 py-3">
                        <TextInput
                            placeholder="Email"
                            autoCapitalize='none'
                            onChangeText={(email) => updateState({ email })}
                            className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md"
                        />
                        
                    </View>

                    <View className="px-2 pb-3">
                        <TextInput
                            placeholder="Phone Number"
                            autoCapitalize='none'
                            onChangeText={(phonenumber) => updateState({ phonenumber })}
                            className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md"
                        />
                        
                    </View>

                    <View className="px-2 pb-3">
                        <TextInput
                            placeholder="Username"
                            autoCapitalize='none'
                            onChangeText={(username) => updateState({ username })}
                            className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md"
                        />
                    </View>

                    <View className="px-2 pb-3">
                        <TextInput
                                placeholder="Your Address"
                                autoCapitalize='none'
                                onChangeText={(address) => updateState({ address })}
                                className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md"
                            />                        
                    </View>

                    <View className="flex-row items-center relative px-2 pb-3">
                            <TextInput
                                placeholder="Password"
                                onChangeText={(password) => updateState({ password })}
                                secureTextEntry={isSecure}
                                className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md w-full"
                            />
                            <TouchableOpacity className="items-center absolute right-3" onPress={() => updateState({ isSecure: !isSecure  })}>
                                {isSecure ?
                                <EyeSlashIcon size={24} color="grey" />
                                :
                                <EyeIcon size={24} color="grey" />
                                }
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row items-center relative px-2">
                            <TextInput
                                placeholder="Confirm Password"
                                onChangeText={(password_confirmation) => updateState({ password_confirmation })}
                                secureTextEntry={isSecure}
                                className="text-purple-800 text-base w-full h-12 px-2 bg-gray-200 rounded-md"
                            />
                            <TouchableOpacity className="items-center absolute right-3" onPress={() => updateState({ isSecure: !isSecure  })}>
                                {isSecure ?
                                <EyeSlashIcon size={24} color="grey" />
                                :
                                <EyeIcon size={24} color="grey" />
                                }
                            </TouchableOpacity>
                        </View>

                        <View className=" pb-4 px-2 pt-8 bg-white">
                            <Pressable onPress={onRegister} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                                {!isLoading ? <Text className="text-white font-bold text-lg">Register</Text> 

                                    : <ActivityIndicator size="small" color="white" />
                                }

                            </Pressable>

                            <View className="items-center py-4">
                                <Pressable onPress={() => navigation.navigate('Login')}>
                                    <Text className="text-sm">Already have an account? <Text className="text-md font-bold text-purple-600 p-2"> Login</Text></Text>
                                </Pressable>
                            </View>
                        </View>
                </ScrollView>
            </Animatable.View>

            {/* <View className=" pb-4 px-3 bg-white">
                <Pressable onPress={onRegister} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                    {!isLoading ? <Text className="text-white font-bold text-lg">Register</Text> 

                        : <ActivityIndicator size="small" color="white" />
                    }

                </Pressable>

                <View className="items-center py-1">
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text className="text-sm">Already have an account? <Text className="text-md font-bold text-purple-600"> Login</Text></Text>
                    </Pressable>
                </View>
            </View> */}
        </View>
    </SafeAreaView>
  )
}

export default SignScreen