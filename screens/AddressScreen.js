import { StyleSheet, View, Text, TouchableOpacity, Pressable, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView from 'react-native-maps';
import GOOGLE_API_KEY from '../constants/maps';
import { Marker } from 'react-native-maps';
import { TextInput } from 'react-native-gesture-handler';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { showError, showSuccess } from '../utils/helperFunction';
import { Base_Url } from '../constants/api';
import headers from '../constants/headers'

const AddressScreen = () => {
  const navigation =  useNavigation();
  const mapViewRef = React.useRef();

  const userData = useSelector((state) => state.auth.userData);
  console.log("userData in address", userData)

  // let Order_type = AsyncStorage.getItem('OrderType');
  // console.log("address screen", Order_type)
  
  const [user_id, setUser_id] = useState(JSON.stringify(userData.user.id));
  const [address_address, setAddress] = useState("");
  const [house_no, setHouse] = useState("");
  const [landmark, setLandmark] = useState("");
  const [address_tag, setTag] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [address_latitude, setLatitude] = useState("");
  const [address_longitude, setLongitude] = useState("");

  const [draggableMarkerCoord, setDraggableMarkerCoord] = React.useState({
    latitude: 0.18128598829516188,
    longitude: 32.54844747561724
  });

 const saveAddress = async() => {
  setIsLoading(true)
  await axios.post(`${Base_Url}/address`, {
    user_id: user_id,
    address_address: address_address,
    house_no: house_no,
    landmark: landmark,
    address_tag: address_tag,
    address_latitude: JSON.stringify(address_latitude),
    address_longitude: JSON.stringify(address_longitude)
  }, {headers: headers})
  .then(response => {
    console.log(response)
    showSuccess("Address saved succesfully")
    navigation.navigate("Addaddress")
    setIsLoading(false)
    setAddress("")
    setHouse("")
    setTag("")
    setLandmark("")
    setLatitude("")
    setLongitude("")

  }).catch(error => {
    if(error.response){
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if(error.request){
      console.log(error.request);
    } else {
      console.log(error.message)
    }
    console.log(error.config)

  })

 }
  // console.log(draggableMarkerCoord)
  // console.log("lat:", latitude)
  // console.log( "long:", longitude)

  return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row items-center mx-2 justify-between pt-1">   
              <Pressable onPress={navigation.goBack}>
                  <ArrowLeftIcon size={18} color="#000"/>
              </Pressable>

              <View className="flex-1 items-center">
                  <Text className="text-lg text-black">Choose Location</Text>
              </View>
        </View>

        {/* map section */}
        <View style={styles.container}>
          <MapView style={styles.map}
              ref={mapViewRef}
              initialRegion={{
                  latitude: 0.1842161760365318,
                  longitude: 32.53842004388755,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
              }}
              
              >
                <Marker
                  draggable
                  pinColor='#A020F0'
                  coordinate={draggableMarkerCoord}
                  onDragEnd={(e) => {
                    setDraggableMarkerCoord(e.nativeEvent.coordinate)
                    setLatitude(e.nativeEvent.coordinate.latitude)
                    setLongitude(e.nativeEvent.coordinate.longitude)
                  }    
                }
                />
            </MapView>
        </View>
        {/* form section */}
        <View className="bg-white mb-3">
          <View className="flex-row justify-between items-center mb-2">
            <TouchableOpacity className="flex-row mx-3 my-1 space-x-2 items-center">
              <MapPinIcon size={14} color="#a020f0"/>
                <Text className="text-left text-purple-400">Use my current location</Text>
            </TouchableOpacity>   

            <View className="mx-4 mb-1 flex-row justify-between">
              <Text className="text-xs">Drag mark to your location</Text>
            </View>
          </View>

          <View className="items-center pb-2">
              <TextInput
                    placeholder="Address e.g Bwebajja"
                    className="text-purple-800 text-xs w-96 h-12 px-2 mb-4 bg-gray-100 rounded-md"
                    autoCapitalize='none'
                    value={address_address}
                    onChangeText={address_address => setAddress(address_address)}
                />

              <TextInput
                  placeholder="House/ Flat Number e.g flat 1"
                  className="text-purple-800 text-xs w-96 h-12 px-2 mb-4 bg-gray-100 rounded-md"
                  autoCapitalize='none'
                  value={house_no}
                  onChangeText={house_no => setHouse(house_no)}

              />

              <TextInput
                  placeholder="Available Landmarks e.g church/school"
                  className="text-purple-800 text-xs w-96 h-12 px-2 mb-4 bg-gray-100 rounded-md"
                  autoCapitalize='none'
                  value={landmark}
                  onChangeText={landmark => setLandmark(landmark)}

              />

          <View className="bg-gray-100 rounded-md h-12">
            <Picker
              style={{height: 25, width: 380}}
              selectedValue={address_tag}
              value={address_tag}
              onValueChange={(itemValue, itemIndex) => setTag(itemValue)}
              >
              <Picker.Item style={{color: "#989898", fontSize: 12}} label="Address Tag" value="null"/>
              <Picker.Item style={{color: "#A020F0", fontSize: 12}}  label="Home" value="home"/>
              <Picker.Item style={{color: "#A020F0", fontSize: 12}}  label="Work" value="work"/>
              <Picker.Item style={{color: "#A020F0", fontSize: 12}}  label="Others" value="others"/>
            </Picker>
          </View>

              
          </View>

         
          <View className="relative bottom-0 items-center justify-center w-screen px-3">
            <Pressable onPress={saveAddress} className="bg-purple-600 py-3 items-center justify-center border rounded-md border-solid border-white w-full">
                {!isLoading ? <Text className="text-white font-bold text-lg">Register</Text> 

                    : <ActivityIndicator size="small" color="white" />
                }

            </Pressable>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
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