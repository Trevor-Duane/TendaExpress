import { View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const CategoryCard = ({
  id,
  category_image,
  category_name,
  category_description
}) => {
  const navigation =  useNavigation();
  // const {height, width} = Dimensions.get('screen')
  // const containerWidth = (Math.ceil(width)) / 2
  // console.log(containerWidth)
  // console.log(Math.ceil(width))

  return (
    <TouchableOpacity
      className="w-[50%] items-center justify-center p-2"
      onPress={() => {
        navigation.navigate('Catscreen', {
          id,
          category_image,
          category_name,
          category_description
        })}}
        >
      <View className="shadow bg-purple-300 rounded">
        <Image
          source={{
            uri: category_image }}
          className="h-44 w-44 rounded"/>
      </View>
      
      <View>
        <Text className="text-gray-700 font-extrabold text-center text-lg">{category_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard