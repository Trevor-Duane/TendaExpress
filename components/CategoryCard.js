import { View, Text, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const CategoryCard = ({
  id,
  category_image,
  category_name,
  category_description
}) => {
  const navigation =  useNavigation();

  return (
    <TouchableOpacity
      className="w-[48%] m-1 items-center justify-center"
      onPress={() => {
        navigation.navigate('Catscreen', {
          id,
          category_image,
          category_name,
          category_description
        })}}
        >
      <View className="shadow">
        <Image
          source={{
            uri: category_image }}
          className="h-48 w-48 rounded"/>
      </View>
      
      <View>
        <Text className="text-gray-700 font-extrabold text-center text-lg">{category_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard