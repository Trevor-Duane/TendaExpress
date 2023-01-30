import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
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