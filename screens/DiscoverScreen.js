import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import StoryCard from '../components/StoryCard';
import { StatusBar } from 'expo-status-bar';


const DiscoverScreen = () => {
  return (
    <SafeAreaView className="bg-[#A020F0] flex-1">
      <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>

      <View className="flex-row justify-between items-center">
        <View className="p-2">
          <Text className="text-2xl font-black w-40 text-white">This is where we tell stories </Text>
        </View>
        <View className="flex-row justify-around items-center gap-2 p-2">
          <Text className="bg-[#A020F0] text-white font-bold py-1 px-3 rounded-2xl">Latest</Text>
          <Text className="bg-gray-100 text-[#A020F0] font-bold py-1 px-3 rounded-2xl">Popular</Text>
        </View>
      </View>

      <View className="bg-white pt-2 pb-20">
        <ScrollView className="py-3">
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default DiscoverScreen