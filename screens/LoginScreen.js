import { View, Text, Pressable, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import React, { useLayoutEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import { StatusBar } from 'expo-status-bar';
// import Users from '../data/users';


import { AuthContext } from '../components/Context';
import axios from 'axios';
import Base_Url from '../constants/api'

const LoginScreen = () => {
    const navigation =  useNavigation();
    const [foundUser, setFoundUser] = useState([]) 

    const headers = {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      }

    const [data, setData] = useState({
        email: '',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const { signIn } = useContext(AuthContext)


    const textInputChange = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        }else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
             });
        }
    };

    const handlePasswordChange = (val) => {
       if(val.trim().length >= 8){
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
       } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
       }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if(val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }
    const loginHandler = async() => {
        if(data.email.length == 0 || data.password.length == 0){
            Alert.alert('Wrong Input', 'username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        // if(foundUser.length == 0){
        //     Alert.alert('Invalid User', 'username or password is incorrect', [
        //         {text: 'Okay'}
        //     ]);
        //     return;
        // }

        await axios.post(`${Base_Url}/login`, {
            email: data.email,
            password: data.password
        }, {headers: headers})
        .then((response) => {
            console.log(response.data)
            setFoundUser(response.data)
        })
        .catch(err => {
            console.log("error", err.message)
        })

        signIn(foundUser);
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
                <Text className="font-bold text-center text-white text-3xl pt-12 pb-12">Welcome</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" className="rounded-t-3xl bg-white flex-1 items-center justify-start">
                <View className="pb-2">
                    <View className="pb-4">
                        <Text className="px-2 pt-4 pb-2 text-base font-bold text-purple-900">Email</Text>
                        <View className="flex-row items-center relative">
                            <TextInput
                                placeholder="Email"
                                onChangeText={(val) => textInputChange(val)}
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                            />
                            <Animatable.View animation="slideInRight" duration={2000} style={{position: 'absolute', right:5}}>
                                {data.check_textInputChange ? 
                                    <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                : null}
                            </Animatable.View>
                        </View>
                        {data.isValidUser ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text className="text-red-400">username must be 4 characters long.</Text>
                            </Animatable.View>
                        }
                    </View>
                    <View>
                        <Text className="px-2 pt-4 pb-2 text-base font-bold text-purple-900">Password</Text>
                        <View className="flex-row items-center relative">
                            <TextInput
                                placeholder="Password"
                                onChangeText={(val) => handlePasswordChange(val)}
                                secureTextEntry={data.secureTextEntry ? true : false}
                                className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                autoCapitalize='none'
                            />
                            <TouchableOpacity className="items-center absolute right-3" onPress={updateSecureTextEntry}>
                                {data.secureTextEntry ?
                                <EyeSlashIcon size={24} color="grey" />
                                :
                                <EyeIcon size={24} color="grey" />
                                }
                            </TouchableOpacity>
                        </View>
                        {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text className="text-red-400">password must be 8 characters long</Text>
                        </Animatable.View>
                        }
                    </View>
                </View>
                <View className="pb-8">
                    <Text className="text-sm text-purple-600 font-thin">forgot password?</Text>
                </View>

                <View className="pb-8 w-96">
                    <Pressable onPress={() => {loginHandler()}
                        } className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
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
            </Animatable.View>
            
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen