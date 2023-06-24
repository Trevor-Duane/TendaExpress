import { StyleSheet, View, Text, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView from 'react-native-maps';
import GOOGLE_API_KEY, { GOOGLE_API_KEY_PLACES } from '../constants/maps';
import { Marker } from 'react-native-maps';
import { TextInput } from 'react-native-gesture-handler';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { showError, showSuccess } from '../utils/helperFunction';
import { Base_Url } from '../constants/api';
import headers from '../constants/headers'
import { color } from 'react-native-reanimated';

const AddressScreen = () => {
  const navigation = useNavigation();
  const mapViewRef = React.useRef();

  const userData = useSelector((state) => state.auth.userData);

  const [user_id, setUser_id] = useState(JSON.stringify(userData.user.id));
  const [address_address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [address_latitude, setLatitude] = useState("");
  const [address_longitude, setLongitude] = useState("");

  const [draggableMarkerCoord, setDraggableMarkerCoord] = React.useState({
    latitude: 0.18128598829516188,
    longitude: 32.54844747561724
  });

  const saveAddress = async () => {
    setIsLoading(true)
    await axios.post(`${Base_Url}/address`, {
      user_id: user_id,
      address_address: address_address,
      landmark: landmark,
      address_latitude: JSON.stringify(address_latitude),
      address_longitude: JSON.stringify(address_longitude)
    }, { headers: headers })
      .then(response => {
        console.log(response)
        showSuccess("Address saved succesfully")
        navigation.navigate("Addaddress")
        setIsLoading(false)
        setAddress("")
        setLandmark("")
        setLatitude("")
        setLongitude("")

      }).catch(error => {
        error(error)

      })

  }
  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
      <View className="flex-row items-center mx-2 justify-between p-2">
        <Pressable onPress={navigation.goBack}>
          <ArrowLeftIcon size={18} color="#fff" />
        </Pressable>

        <View className="flex-1 items-center">
          <Text className="text-xl font-bold text-white">Choose Location</Text>
        </View>
      </View>

      <View className="bg-white flex-1">

        <GooglePlacesAutocomplete
          placeholder='Search Location'
          minLength={2}
          fetchDetails={true}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // console.log(data, details);
            setDraggableMarkerCoord({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
            setLatitude(details.geometry.location.lat);
            setLongitude(details.geometry.location.lng);
            // setAddress(data.description);
          }}
          textInputProps={{
            placeholderTextColor: '#6b7280',
            returnKeyType: 'search',
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInputContainer: {
              backgroundColor: '#fff',
              paddingHorizontal: 4,
              paddingVertical: 10,
            },
            textInput: {
              height: 50,
              backgroundColor: '#f3f4f6',
              color: '#000',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          query={{
            key: GOOGLE_API_KEY_PLACES,
            language: 'en',
            components: 'country:ug',
          }}
        />

        {/* map section */}
        <View className="h-80 w-full border-b border-purple-400">
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
        <View className="flex-row justify-between items-center my-2">
          <TouchableOpacity className="flex-row mx-3 my-1 space-x-2 items-center">
            <MapPinIcon size={14} color="#a020f0" />
            <Text className="text-left text-purple-400">Use my current location</Text>
          </TouchableOpacity>

          <View className="mx-4 mb-1 flex-row justify-between">
            <Text className="text-xs">Drag mark to your location</Text>
          </View>
        </View>

        <View className="items-center pb-2 w-screen px-2">
          <TextInput
            placeholder="Address e.g Bwebajja"
            className="text-purple-800 text-xs h-12 px-2 mb-4 bg-gray-100 rounded-md w-full"
            autoCapitalize='none'
            value={address_address}
            onChangeText={address_address => setAddress(address_address)}
          />

          <TextInput
            placeholder="Available Landmarks e.g church/school"
            className="text-purple-800 text-xs h-12 px-2 mb-4 bg-gray-100 rounded-md w-full"
            autoCapitalize='none'
            value={landmark}
            onChangeText={landmark => setLandmark(landmark)}

          />
        </View>

        {address_address.length != 0 && landmark.length != 0 ?
        <View className="relative items-center justify-center w-screen px-1 flex-1">
          <Pressable onPress={saveAddress} className="bg-purple-600 py-3 items-center justify-end absolute bottom-1 border rounded-md border-solid border-white w-full">
            {!isLoading ? <Text className="text-white font-bold text-lg">Register Address</Text>

              : <ActivityIndicator size="small" color="white" />
            }

          </Pressable>
        </View>
        :
        null
      }
      </View>

      

    </SafeAreaView>
  )
}

export default AddressScreen
const styles = StyleSheet.create({
  map: {
    // flex: 1,
    width: '100%',
    height: '100%'
  }
})