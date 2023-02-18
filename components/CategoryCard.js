import { View, Text, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const CategoryCard = ({
  id,
  category_image,
  category_name,
  category_description
}) => {
  const navigation =  useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Catscreen', {
          id,
          category_image,
          category_name,
          category_description
        })}}
      className="relative mr-2" >
       <View className="filter backdrop-filter">
         <Image 
            source={{
             uri: category_image,
         }}
         className="h-20 w-20 rounded"
        />
       </View>
      <Text className="absolute bottom-1 left-1 text-white font-extrabold">{category_name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard