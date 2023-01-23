import { View, Text, TextInput, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import { AuthContext } from '../components/Context';


const SignScreen = () => {
    const navigation =  useNavigation();

    const [data, setData] = React.useState({
        email: '',
        mobile: '',
        username: '',
        address: '',
        password: '',
        check_textInputChange1: false,
        check_textInputChange2: false,
        check_textInputChange3: false,
        check_textInputChange4: false,
        secureTextEntry: true,


    })
    
    const textInputChange1 = (val1) => {
        if(val1.length !== 0){
            setData({
                ...data,
                email: val1,
                check_textInputChange1: true
            });
        }else {
            setData({
                ...data,
                email: val1,
                check_textInputChange1: false
            })
        }
    }

    const textInputChange2 = (val2) => {
        if(val2.length !== 0){
            setData({
                ...data,
                mobile: val2,
                check_textInputChange2: true
            });
        }else {
            setData({
                ...data,
                mobile: val2,
                check_textInputChange2: false
            })
        }
    }

    const textInputChange3 = (val3) => {
        if(val3.length !== 0){
            setData({
                ...data,
                username: val3,
                check_textInputChange3: true
            });
        }else {
            setData({
                ...data,
                username: val3,
                check_textInputChange3: false
            })
        }
    }

    const textInputChange4 = (val3) => {
        if(val3.length !== 0){
            setData({
                ...data,
                address: val3,
                check_textInputChange4: true
            });
        }else {
            setData({
                ...data,
                address: val3,
                check_textInputChange4: false
            })
        }
    }

    const handlePasswordChange = (val5) => {
        setData({
            ...data,
            password: val5
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
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
                {/* <ScrollView> */}
                    <View>
                        <View className="pb-6">
                        <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Email"
                                    autoCapitalize='none'
                                    onChangeText={(val1) => textInputChange1(val1)}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                <Animatable.View animation="slideInRight" style={{position: 'absolute', right:3}}>
                                    {data.check_textInputChange1 ? 
                                        <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                    : null}
                                </Animatable.View>
                        </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Phone Number"
                                    autoCapitalize='none'
                                    onChangeText={(val2) => textInputChange2(val2)}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                <Animatable.View animation="slideInRight" style={{position: 'absolute', right:3}}>
                                    {data.check_textInputChange2 ? 
                                        <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                    : null}
                                </Animatable.View>
                            </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <View className="flex-row items-center relative">
                                    <TextInput
                                        placeholder="Username"
                                        autoCapitalize='none'
                                        onChangeText={(val3) => textInputChange3(val3)}
                                        className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                    />
                                    <Animatable.View animation="slideInRight" style={{position: 'absolute', right:5}}>
                                        {data.check_textInputChange3 ? 
                                            <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                        : null}
                                    </Animatable.View>
                                </View>
                            </View>
                        </View>

                        <View className="pb-6">
                        <View className="flex-row items-center relative">
                            <TextInput
                                    placeholder="Your Address"
                                    autoCapitalize='none'
                                    onChangeText={(val4) => textInputChange4(val4)}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                <Animatable.View animation="slideInRight" style={{position: 'absolute', right:3}}>
                                    {data.check_textInputChange4 ? 
                                        <CheckCircleIcon animation="slideInRight" size={24} color="#A020F0" />
                                    : null}
                                </Animatable.View>
                        </View>
                        </View>

                        <View className="pb-6">
                            <View className="flex-row items-center relative">
                                <TextInput
                                    placeholder="Password"
                                    onChangeText={(val) => handlePasswordChange(val)}
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
                                />
                                <TouchableOpacity className="items-center absolute right-3" onPress={updateSecureTextEntry}>
                                    {data.secureTextEntry ?
                                    <EyeSlashIcon size={24} color="grey" />
                                    :
                                    <EyeIcon size={24} color="grey" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                {/* </ScrollView> */}

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
            </Animatable.View>
        </View>
    </SafeAreaView>
  )
}

export default SignScreen