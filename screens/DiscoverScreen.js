import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import StoryCard from '../components/StoryCard';

const DiscoverScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View className="flex-row justify-between items-center">
          <View className="p-2">
            <Text className="text-2xl font-black w-40">This is where we tell stories </Text>
          </View>
          <View className="flex-row justify-around items-center gap-2 p-2">
            <Text className="bg-[#A020F0] text-white font-bold py-1 px-3 rounded-2xl">Latest</Text>
            <Text className="bg-gray-200 text-gray-500 font-bold py-1 px-3 rounded-2xl">Popular</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-2 bg-gray-200 rounded-lg p-2 mx-2">
            <MagnifyingGlassIcon size={18} color="#000000" className="font-bold" />
            <TextInput
                className=""
                placeholder='Search stories'
                keyboardType='default'
            />
        </View>
      </View>
      <View className=" mt-4 mb-32">
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