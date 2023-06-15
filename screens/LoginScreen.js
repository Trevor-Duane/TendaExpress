import { View, Text, Pressable, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import React, { useLayoutEffect, useState, useContext } from 'react'
import wallpaper from '../assets/images/wallpaper.png'
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import validator from '../utils/validator';

import { StatusBar } from 'expo-status-bar';
import { showError, showSuccess } from '../utils/helperFunction';
import actions from '../actions';


const LoginScreen = () => {

    const navigation =  useNavigation();

    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password:'',
        isSecure: true
    });

    const { isLoading, email, password, isSecure } = state

    const updateState = (data) => setState(() => ({...state, ...data}))

    const isValidData = () => {
        const error = validator({
           email,
           password
        })
        if(error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogin = async() => {
        const checkValid = isValidData()
        updateState({isLoading: true})
        if(checkValid){
            try {
                const res = await actions.login({
                    email,
                    password,
                })
                console.log("res===>", res)
                if(res.token){
                    showSuccess("login success")

                }
                updateState({isLoading: false})
            } catch (error) {
                console.log("error raise")
                showError(error.message)
                updateState({isLoading: false})
                
            }
            
        } else {
            // updateState({isLoading: isLoading})

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
        <View className="flex-1">
            <View>
                <Text className="font-bold text-center text-white text-3xl pt-20">Welcome</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" className="rounded-t-3xl bg-purple-600 flex-1 items-center justify-start w-screen">
                <View className="relative top-24 py-4 bg-white flex-1 rounded-t-3xl">
                    <View className="px-3 w-screen py-2">
                        <View>
                            <Text className="text-base font-bold text-purple-900 py-[2px]">Email</Text>
                        </View>

                        <View>
                            <TextInput placeholder="Email"
                            onChangeText={(email) => updateState({ email })}
                            className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md"/>
                        </View>
                    </View>

                    <View className="px-3 w-screen py-2">
                        <View>
                            <Text className="text-base font-bold text-purple-900 py-[2px]">Password</Text>
                        </View>
                        <View className="flex-row items-center relative">
                            <TextInput
                                placeholder="Password"
                                onChangeText={(password) => updateState({ password })}
                                secureTextEntry={isSecure}
                                className="text-purple-800 text-base h-12 px-2 bg-gray-200 rounded-md w-full"
                                autoCapitalize='none'
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

                    <Pressable className="px-3 py-2" onPress={() => navigation.navigate('forgotpass')}>
                        <Text className="text-sm text-purple-600 font-thin">forgot password?</Text>
                    </Pressable>

                    <View className="px-3 w-screen">
                        <Pressable
                            onPress={onLogin}
                            className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white"
                        >
                            {isLoading
                            ?
                            <ActivityIndicator size="small" color="#FFFFFF"/> 
                            : 
                            <Text className="text-white font-bold text-xl">Login</Text>}
                            
                        </Pressable>
                    </View>

                    <View className="items-center py-4">
                        <Pressable onPress={() => navigation.navigate('Signup')}>
                            <Text className="text-sm">Dont't have an account? <Text className="items-baseline text-md text-purple-600 font-bold p-2"> Sign Up</Text></Text>
                        </Pressable>

                    </View>
                </View>
            </Animatable.View>          
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen