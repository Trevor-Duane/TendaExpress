import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import DishCard from './DishCard'
import AllMenu from './AllMenu';


const Menu = ({id, title, description}) => {
  return (
    <View>

      <View className="flex-row items-center justify-between px-2 mt-4">
        <Text className="text-purple-800 text-xl font-bold">{title}</Text>
        <ArrowRightIcon size={18} color="#a020f0"/>
      </View>

      <View>
        <Text className="text-xs text-gray-500 px-2">{description}</Text>
      </View>
    
      <View>
        <AllMenu/>
      </View>
  </View>
  )
}

export default Menu