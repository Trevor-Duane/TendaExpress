import { View, Text, Image, Button, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import startImage from '../assets/images/preview.png'
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

// let customFonts = {
//     'Lilita_One': require('../assets/fonts/LilitaOne-Regular.ttf'),

// }

const GetStarted = () => {
    // const [fontsLoaded, setFontsLoaded] = React.useState(false);
    // React.useEffect(() => {
    //     const loadFont = async() => {
    //         await Font.loadAsync(customFonts);
    //         setFontsLoaded(true);
    //     }
    //     loadFont()
    // }, [])

    const navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
        <StatusBar className="bg-purple-600" barStyle="light-content"/>
        <View className="flex-1 items-center content-between bg-purple-600">
            <View className="pb-4 mt-8">
                <Text className="text-center text-white text-4xl pt-2 pb-1 font-bold">Tenda<Text className="text-[#E2C0F8]">Express</Text></Text>
                <Image source={startImage} className="h-64 w-screen"/>
                <Text className="text-center text-white pt-4 text-2xl font-bold">All your favourite foods</Text>
                <Text className="text-center text-white pt-[-5px]">Delivered fast to your door</Text>
            </View>
 
            <View className="pb-4 w-screen px-2">
                <View className="pb-3"> 
                    <Pressable onPress={() => navigation.navigate('Login')} className="bg-white py-3 items-center justify-center rounded-md">
                        <Text className="text-purple-800 font-bold text-xl">Get Started</Text>
                    </Pressable>
                </View>
                
                <View className="hidden">
                    <Pressable onPress={() => navigation.navigate('Pickgo')} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white">
                        <Text className="text-white font-bold text-xl">Pick & Go</Text>
                    </Pressable>
                </View>
                

                <View className="mt-2 items-center">
                {/* <View>
                    <Text className="bottom-1 text-center text-white bg-purple-600">Signin with</Text>
                </View> */}
                {/* <View className="flex-row items-center space-x-2 mt-1">
                    <Image className="h-5 w-5" source={{uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}}/>
                    <Image className="h-5 w-5" source={{uri: "https://cdn-icons-png.flaticon.com/512/3128/3128304.png"}}/>
                </View> */}
                <View className="mt-2">
                    <Text className=" text-[#E2C0F8] text-base">Don't have an account? <Text className=" text-white font-bold"> Signup</Text></Text>
                </View>
            </View>
            </View>
        
            
        </View>
    </SafeAreaView>
  )
}

export default GetStarted