import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { BugAntIcon, ChatBubbleOvalLeftIcon, HeartIcon } from 'react-native-heroicons/solid'

export default function StoryCard() {
  const navigation =  useNavigation();

  return (
    <TouchableOpacity className="flex-row items-center justify-center mb-4 gap-3 border-b border-gray-100 p-2">
        {/* left */}
        <View>
            <View>
                <Image 
                    source={{uri: "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"}}
                    className="h-32 w-32 rounded-lg"
                />
            </View>
            <View className="absolute top-2 left-2">
                <Text className="bg-white text-sm text-gray-600 rounded-lg px-2">3 Feb</Text>
            </View>
        </View>
        {/* right */}
        <View className="flex-1">
            <View>
                <Text className="text-xs text-gray-400">07 Mins Read</Text>
            </View>

            <View className="flex-1">
                <Text className="text-lg font-bold" onPress={() => navigation.navigate('Singlestory')}>Lorem Ipsum is simply dummy text of the</Text>
            </View>
            <View className="flex-row items-center gap-2">
                <View className="flex-row items-center justify-center">
                    <HeartIcon size={16} color="#cccccc"/>
                    <Text className="px-1 text-gray-600">224.3k</Text>

                </View>
                <View className="flex-row items-center justify-center">
                    <ChatBubbleOvalLeftIcon size={16} color="#cccccc"/>
                    <Text className="px-1 text-gray-600">89.4k</Text>

                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}