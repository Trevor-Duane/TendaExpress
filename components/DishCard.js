import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ShoppingCartIcon } from 'react-native-heroicons/solid'

const DishCard = ({
    id,
    imgUrl,
    name,
    short_description,
    price,
    rating

}) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image
        source={{
            uri: imgUrl,
        }}
        className="h-48 w-48 rounded"
      />
      <View className="flex-col items-start justify-between pb-4 px-3 bg-gray-100 rounded-b">
            <View>
                <Text className="font-semibold text-gray-800 text-lg">{name}</Text>
                <Text className="text-xs text-gray-500">{short_description}</Text>
            </View>

            <View className=" w-full relative">
                <View className="flex-row items-center justify-between pt-2">
                    <Text className="font-semibold text-purple-600">{price}</Text>
                    <TouchableOpacity style={styles.button} className="shadow-lg">
                      <ShoppingCartIcon size={24} color="#a020f0" onPress={() => {
                            navigation.navigate('Single', {
                              name,
                              price,
                              short_description,
                              imgUrl,
                            });
                            }}/>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    </TouchableOpacity>
  )
}
export default DishCard

const styles = StyleSheet.create({
  button:{
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})