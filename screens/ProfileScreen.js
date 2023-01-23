import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View className="p-2">
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen