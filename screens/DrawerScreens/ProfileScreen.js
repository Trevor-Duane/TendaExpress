import { View, Text, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, Bars3BottomLeftIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import actions from '../../actions';


const ProfileScreen = () => {
    const navigation =  useNavigation();

    const userData = useSelector((state) => state.auth.userData);

    const removeAcount = () => {
        Alert.alert(
        'Remove Account',
        'Are you sure you want to delete your account',
        [{text: 'Yes', onPress: deleteAccount}, {text: 'No',}],{cancelable: true}
        )
    }
    const deleteAccount = () => {
        actions.logout()
    }


  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}
         <View className="bg-[#A020F0]s">
               <View className="flex-row items-center px-2 pt-2 pb-1 justify-between">
                    <TouchableOpacity className="rounded px-1 shadows" onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon 
                            size={20} 
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <View className="flex-1">
                        <Text className="font-extrabold text-xl text-center text-white">Your Profile</Text>
                    </View>
                </View>
         </View>

         <View className="flex-1 bg-gray-200">
            <View className="justify-center items-center p-4">
                <UserCircleIcon size={72} color="#000"/>
                <Text className="capitalize font-bold text-base">{userData.user.username}</Text>
            </View>

            <View className="">
                <View className="flex-row items-center space-x-2 px-2">
                    <Text className="font-bold">Email:</Text>
                    <Text>{userData.user.email}</Text>

                </View>

                <View className="flex-row items-center space-x-2 px-2 py-2">
                    <Text className="font-bold">Contact:</Text>
                    <Text>0777129180</Text>
                </View>
            </View>
            

            <View className="pt-6">
                <View className="px-2">
                    <Pressable
                        className="bg-purple-600 py-2 items-center justify-center border rounded-md border-solid border-white"
                        >
                        <Text className="text-white font-semibold text-xl">Edit Profile</Text>           
                    </Pressable>

                </View>

                <View className="px-2 py-2">
                    <Pressable
                        className="bg-purple-600 py-2 items-center justify-center border rounded-md border-solid border-white"
                        onPress={removeAcount}
                        >
                        <Text className="text-white font-semibold text-xl">Delete Account</Text>           
                    </Pressable>

                </View>
                
            </View>

         </View>

    </SafeAreaView>
  )
}

export default ProfileScreen