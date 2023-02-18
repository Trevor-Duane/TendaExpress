import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'

import React from 'react'
import MapView from 'react-native-maps';
import { TextInput } from 'react-native-gesture-handler';
import { ArrowLeftIcon, CameraIcon, ChevronRightIcon, InformationCircleIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const AddressScreen = () => {
const navigation =  useNavigation();

  return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row items-center mx-2 justify-between pt-1">   
              <View>
                  <ArrowLeftIcon size={18} color="#000"/>
              </View>

              <View className="flex-1 items-center">
                  <Text className="text-lg text-black">New address</Text>
              </View>
          </View>

          <TouchableOpacity className="border border-gray-300 mb-2 mx-4 rounded">
            <View className="flex-row items-center gap-3 m-2">
              <View className="bg-purple-700 rounded-full p-2">
                <CameraIcon size={16} color="#ffffff"/>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold">Choose avatar</Text>
                <Text className="text-[10px] text-gray-500">it can be an emoji or image</Text>
              </View>
              <View>
                <ChevronRightIcon size={18} color="#808080"/>
              </View>
            </View>
          </TouchableOpacity>

          <View className="items-center mx-2">
            <TextInput
                placeholder="Address Title e.g Home"
                className="text-purple-800 text-xs w-96 h-10 px-2 mb-2 bg-gray-100 rounded-md"
                autoCapitalize='none'
            />
          </View>

          {/* map section */}
            <View className="mx-4 mb-1 flex-row justify-between">
              <Text className="text-sm font-bold">Choose location</Text>
              <Text className="text-xs text-purple-400">Tap anywhere on map</Text>
            </View>
            <View style={styles.container}>
              <MapView style={styles.map}
                  initialRegion={{
                      latitude: 0.1842161760365318,
                      longitude: 32.53842004388755,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }}
                  />
              </View>
    <View>
    </View>
      {/* form section */}
    <SafeAreaView className="bg-white ">
        <View>
            
            <TouchableOpacity className="flex-row mx-2 my-1 space-x-2 items-center">
              <MapPinIcon size={14} color="#a020f0"/>
                <Text className="text-left">Use my current location</Text>
            </TouchableOpacity>   

            <View className="items-center pb-2">
                <TextInput
                    placeholder="House/ Flat Number"
                    className="text-purple-800 text-xs w-96 h-10 px-2 mb-2 bg-gray-100 rounded-md"
                    autoCapitalize='none'
                />
                <TextInput
                    placeholder="Available Landmarks"
                    className="text-purple-800 text-xs w-96 h-10 px-2 mb-2 bg-gray-100 rounded-md"
                    autoCapitalize='none'
                />
                
            </View>

            <View className="relative bottom-2 items-center justify-center w-screen px-2">
                <TouchableOpacity onPress={() => {navigation.navigate('Addaddress')}} className="bg-purple-600 rounded w-full">
                    <Text className="text-white text-base font-bold text-center px-2 py-2">Save Address</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    </SafeAreaView>
    </SafeAreaView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal:14,
      backgroundColor: "#a020f0"
    },
    map: {
      width: '100%',
      height: '100%',
    },
    // mapPin:{
    //   position: "absolute",
    //   alignItems: "center"
    // }
  });