import { View, Text, BackHandler, Image, TouchableOpacity } from 'react-native';
import sucesss from "../assets/images/awesome.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from '../reducers/basketSlice';
import { emptyBasket } from "../reducers/basketSlice";
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates'
// import RNRestart from 'react-native-restart';
// import { DevSettings } from 'react-native';


let currentLocation = { 
  streetName: "Bwebajja",
  gps: {
      latitude: 0.18128598829516188,
      longitude: 32.54844747561724
  }
}

let address = { 
  streetName: "Bweya",
  gps: {
      latitude: 0.18420287573112815,
      longitude: 32.53841199043348
  }
}

const clearAsync = async () => {
  try {
    await AsyncStorage.multiRemove(['serviceType', 'pdistance'])
    console.log("AsyncStorage Cleared")
  } catch (error) {
    console.log(error)
    
  }

}

export default function PaymentSuccess({ navigation }) {

  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);

  // const emptyCart = () => {
  //  return dispatch({emptyBasket})
  // }

  React.useEffect(() => {
      const backHandler = BackHandler.addEventListener
      ('hardwareBackPress', () => {return true})

      return () => backHandler.remove();
  }, [])
  return (
    <SafeAreaView className="flex-1 bg-white p-2">
        <View className="flex-1 justify-center items-center">
            <Image
            resizeMode='contain'
            source={sucesss}
            className="h-72 w-72"
            />

            <Text className="text-3xl font-bold">Congragulations!</Text>
            <Text className="text-gray-600 text-base">Your Order has been recieved</Text>
        </View>
        <View className="absolute bottom-0">
            <View className="items-center justify-center w-screen px-2 mb-2">
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home')
                  navigation.navigate('Track')
                  dispatch(emptyBasket())
                  clearAsync()
                  Updates.reloadAsync()
                }}
                className="bg-purple-600 rounded w-full">
                    <Text className="text-white text-base font-bold text-center px-3 py-2">View Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}


