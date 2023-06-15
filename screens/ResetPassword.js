import { View, Text, Pressable, Image, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { showError, showSuccess} from '../utils/helperFunction';
import validator from '../utils/validator';
import axios from 'axios';
import { Base_Url } from '../constants/api';
import headers from '../constants/headers'
import { showMessage } from 'react-native-flash-message';

function ResetPassword() {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])

    const [email, setEmail] = useState("");
    const [reset_token, setReset_token] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const isValidData = () => {
        const error = validator({
            email,
            reset_token,
            password,
            password_confirmation,
        })
        if(error){
            showError(error)
            return false
        }
        return true
    }

    const onReset = async() => {
        const checkValid = isValidData()
        setIsLoading(true)
        if(checkValid){
            try{
                await axios.post(`${Base_Url}/reset`,
                {
                email: email,
                token: reset_token,
                password: password,
                password_confirmation: password_confirmation,
                }, {headers: headers})
                .then(response => {
                    console.log(response.data)
                    console.log(email, reset_token, password)
                    if(response.status === 200)
                    showSuccess(response.data.message)
                    setTimeout(() => {
                        navigation.navigate('Login')
                    }, 2000)
                })
            } catch (error) {
                setIsLoading(false)
                console.log(error.message)
            }
        }
        setIsLoading(false)
    }
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
    <View className="flex-1 items-start justify-center w-screen">

        <View>
            <View className="pt-4">
                <Text className="font-bold text-white text-3xl px-4">Create new password</Text>
            </View>

            <View className="pb-8">
                <Text className="text-gray-300 pt-2 px-4">Your new password must be different from the previously used passwords</Text>
            </View>

            <View className="pb-6 px-4">
                <TextInput
                    placeholder="Email"
                    className="text-purple-800 text-base px-2 h-12 bg-gray-200 rounded-md"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>

            <View className="pb-6 px-4">
                <TextInput
                    placeholder="Reset Token"
                    className="text-purple-800 text-base px-2 h-12 bg-gray-200 rounded-md"
                    value={reset_token}
                    onChangeText={reset_token => setReset_token(reset_token)}
                />
                <Text className="text-gray-300 pt-1">Check your email for the reset token</Text>
            </View>

            <View className="pb-6 px-4">
                <TextInput
                    placeholder="Password"
                    className="text-purple-800 text-base px-2 h-12 bg-gray-200 rounded-md"
                    value={password}
                    onChangeText={password => setPassword(password)}
                />
                <Text className="text-gray-300 pt-1">Must be atleast 8 characters</Text>
            </View>

            <View className="pb-6 px-4">
                <TextInput
                    placeholder="Confirm password"
                    className="text-purple-800 text-base px-2 h-12 bg-gray-200 rounded-md"
                    value={password_confirmation}
                    onChangeText={password_confirmation => setPassword_confirmation(password_confirmation)}
                />
                <Text className="text-gray-300 pt-1">Both passwords must match</Text>
            </View>

            <View className="pb-4 px-3 w-screen">
                <Pressable onPress={onReset} className="bg-black py-3 items-center justify-centerborder rounded-md border-solid border-white">
                    {!isLoading
                    ?
                    <Text className="text-white font-bold text-xl">Reset password</Text>
                    :
                    <ActivityIndicator size="small" color="white"/>
                    }
                </Pressable>
            </View>

        </View>

        {/* <View className="items-center w-screen justify-center flex-row">
            <ArrowLeftIcon  size={14} color="#fff"/>
            <Text className="text-gray-300 px-1">Back to login</Text>
        </View> */}
        
    </View>   
</SafeAreaView>
  )
}

export default ResetPassword