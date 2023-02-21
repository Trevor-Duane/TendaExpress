import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GOOGLE_API_KEY from '../constants/maps';
import { CalculatorIcon, MapPinIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/solid';
import MapViewDirections from 'react-native-maps-directions';

// let currentLocation = { lat: 0.32768, lng: 32.5844992 }
// let address = { lat: 0.1842121, lng: 32.5362261 }

export default function MapScreen({ route, navigation }) {
  const mapView = React.useRef();


  const [restuarant, setResturant] = React.useState(null);
  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  
  React.useEffect(() => {
    let {address, currentLocation} = route.params;
    let restuarant = "Cafe Tenda"
    console.log(address)

    let fromLoc = address.gps
    let toLoc = currentLocation.gps
    let street = currentLocation.streetName

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    }

    setResturant(restuarant)
    setStreetName(street)
    setFromLocation(fromLoc)
    setToLocation(toLoc)
    setRegion(mapRegion)
  }, [])

  function CalculateAngle(coordinates){
    let startLat = coordinates[0]["latitude"]
    let startLng = coordinates[0]["longitude"]
    let endLat = coordinates[1]["latitude"]
    let endLng = coordinates[1]["longitude"]

    let dx = endLat - startLat
    let dy = endLng - startLng

    return Math.atan2(dy, dx) * 180 / Math.PI

  }

  function zoomIn(){
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    }
    setRegion(newRegion)
    mapView.current.animateToRegion(newRegion, 200)
  }
  function zoomOut(){
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    }
    setRegion(newRegion)
    mapView.current.animateToRegion(newRegion, 200)
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor="#A020F0"
          optimizeWaypoints={true}
          onReady={result => {
            setDuration(result.duration)

            if(!isReady){
              //fit route into map
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 2,
                  bottom: 4,
                  left: 2,
                  top: 4
                }
              })

              //reposition bike to face route
              let nextLoc = {
                latitude: result.coordinates[0]["latitude"],
                longitude: result.coordinates[0]["longitude"]
              }

              if(result.coordinates.length >= 2){
                let angle = CalculateAngle(result.coordinates)
                setAngle(angle);
              }
              setFromLocation(nextLoc)
              setIsReady(true)
            }
          
          }}
        />
        <Marker coordinate={toLocation}>
          <View className="h-8 w-8 rounded-full items-center justify-center bg-white">
            <View className="h-6 w-6 rounded-full items-center justify-center bg-purple-600">
            <MapPinIcon size="16" color="#ffffff"/>
            </View>

          </View>

        </Marker>

        <Marker coordinate={fromLocation} anchor={{x: 0.5, y: 0.5}} flat={true} /*rotation={angle}*/>
          <Image
            source = {{uri: "https://cdn-icons-png.flaticon.com/512/7695/7695161.png"}}
            className="h-10 w-10"
            />
        </Marker>
      </MapView>

      <View className="absolute w-full h-50 items-center justify-center mt-2 top-6 right-0 left-0 px-3">
        <View className=" w-full flex-row justify-center items-center bg-purple-300 rounded-lg p-3">
          <View>
            <MapPinIcon size={24} color="#000000"/>
          </View>

          <View className="flex-1 px-1">
            <Text className="text-purple-600 font-bold text-base">From Cafe Tenda {streetName}</Text>
          </View>

          <Text className="text-purple-600 font-bold text-base">{Math.ceil(duration)} mins</Text>
        </View>

      </View>

      {/* zooming buttons */}
      <View className="absolute justify-between bottom-24 right-2 h-20 w-auto">
        <TouchableOpacity className="bg-purple-600 rounded-full p-1 items-center justify-center" onPress={() => zoomIn()}>
          <PlusIcon size={20} color="#fff"/>
        </TouchableOpacity>

        <TouchableOpacity className="bg-purple-600 rounded-full p-1 items-center justify-center" onPress={() => zoomOut()}>
          <MinusIcon size={20} color="#fff"/>
        </TouchableOpacity>

      </View>

      <View className="absolute bottom-0">
          <View className="items-center justify-center w-screen px-2 mb-2">
              <TouchableOpacity onPress={() => navigation.navigate('Tracking', {
                  duration
              })} className="bg-purple-600 rounded w-full">
                  <Text className="text-white text-base font-bold text-center px-2 py-3">Order Tracking</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});