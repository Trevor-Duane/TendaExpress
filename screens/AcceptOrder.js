import { View, Text, ActivityIndicator, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'


import React from 'react'

const AcceptOrder = () => {
  const navigation =  useNavigation();

    setTimeout(() => {
        navigation.navigate('Payments'); //this.props.navigation.navigate('Login')
    }, 5000);  
 
  return (
    <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#A020F0"/>
            <Text>Waiting for Cafe Tenda to accept your order</Text>
        </View>
    </SafeAreaView>
  )
}

export default AcceptOrder