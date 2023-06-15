import { View, Text, Pressable, Image, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { showError, showSuccess} from '../utils/helperFunction';
import validator from '../utils/validator';
import axios from 'axios';
import { Base_Url } from '../constants/api';
import headers from '../constants/headers'
import { showMessage } from 'react-native-flash-message';

function ForgotPassword() {
    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])

   const [email, setEmail] = useState("");
   const [isLoading, setIsLoading] = useState(false);
    
    const isValidData = () => {
        const error = validator({email})
        if(error){
            showError(error)
            return false
        }
        return true
    }

    const onSubmit = async() => {
        const checkValid = isValidData()
        setIsLoading(true)
        if(checkValid){
            try{
                await axios.post(`${Base_Url}/forgot`, {email: email}, {headers: headers})
                .then(response => {
                    console.log(response.data.message, response.status)
                    if(response.status === 200)
                    showSuccess(response.data.message)
                    setTimeout(() => {
                        navigation.navigate('resetpass')
                    }, 2000)
                })
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        setIsLoading(false)
    }
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
        <View className="flex-1 items-start justify-center w-screen">

            <View>
                <View className="pt-4">
                    <Text className="font-bold text-white text-3xl px-4">Forgot password?</Text>
                </View>

                <View className="pb-8">
                    <Text className="text-gray-300 pt-2 px-4">No worries, we'll send you reset instructions</Text>
                </View>

                <View className="pb-6 px-4">
                    <TextInput
                        placeholder="Enter your email"
                        className="text-purple-800 text-base px-2 h-12 bg-gray-200 rounded-md"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                </View>

                <View className="pb-4 px-3 w-screen">
                    <Pressable onPress={onSubmit} className="bg-black py-3 items-center justify-centerborder rounded-md border-solid border-white">
                       {!isLoading
                       ?
                       <Text className="text-white font-bold text-xl">Reset password</Text>
                       :
                       <ActivityIndicator size="small" color="white"/>
                       }
                    </Pressable>
                </View>

            </View>

            <View className="items-center w-screen justify-center flex-row">
                <ArrowLeftIcon  size={14} color="#fff"/>
                <Text className="text-gray-300 px-1">Back to login</Text>
            </View>
            
        </View>   
    </SafeAreaView>
  )
}

export default ForgotPassword