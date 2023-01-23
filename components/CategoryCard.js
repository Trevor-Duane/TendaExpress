import { View, Text, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const CategoryCard = ({
  id,
  image,
  name,
  dishes
}) => {
  const navigation =  useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Catscreen', {
          id,
          image,
          name,
          dishes
        })}}
      className="relative mr-2" >
       <View>
         <Image 
            source={{
             uri: image,
         }}
         className="h-20 w-20 rounded bg-blend-darken"
        />
       </View>
      <Text className="absolute bottom-1 left-1 text-white font-extrabold">{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard