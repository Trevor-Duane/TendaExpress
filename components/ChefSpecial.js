import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import DishCard from './DishCard'
import { Dishes } from '../data/dishes'

const ChefSpecial = ({id, title, description}) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-2 mt-4">
        <Text className="text-purple-800 text-xl font-bold">{title}</Text>
        <ArrowRightIcon size={18} color="#a020f0"/>
      </View>

      <Text className="text-xs text-gray-500 px-2">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        className="pt-4"
      >
        {Dishes?.map(Dish => (
            <DishCard
              key={Dish.id}
              imgUrl={Dish.imgUrl}
              name={Dish.name}
              short_description={Dish.short_description}
              price={Dish.price}
              />
        ))}
      </ScrollView>
    </View>
  )
}

export default ChefSpecial