import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const CartScreen = () => {
  return (
    <SafeAreaView>
      <View className="p-2">
        <Text>CartScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen