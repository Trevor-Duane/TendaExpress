import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import DishCard from './DishCard'

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
        <DishCard
           id="123"
           imgUrl="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"
           name="Burger"
           short_description="Double beff, with fries"
           price="Ugx 26,0000"
           rating={4.5}
          />

          <DishCard
           id="123"
           imgUrl="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"
           name="Burger"
           short_description="Double beff, with fries"
           price="Ugx 26,0000"
           rating={4.5}
          />

          <DishCard
           id="123"
           imgUrl="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"
           name="Burger"
           short_description="Double beff, with fries"
           price="Ugx 26,0000"
           rating={4.5}
          />

          <DishCard
           id="123"
           imgUrl="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"
           name="Burger"
           short_description="Double beff, with fries"
           price="Ugx 26,0000"
           rating={4.5}
          />

          <DishCard
           id="123"
           imgUrl="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"
           name="Burger"
           short_description="Double beff, with fries"
           price="Ugx 26,0000"
           rating={4.5}
          />

          <DishCard
           id="123"
           imgUrl="https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1672999390~exp=1672999990~hmac=c1dd81ce13dfd1fe74862688dfe3ebe92e797c0a9903640e3216f35c55d2dbfa"
           name="Burger"
           short_description="Double beff, with fries"
           price="Ugx 26,0000"
           rating={4.5}
          />
      </ScrollView>
    </View>
  )
}

export default ChefSpecial