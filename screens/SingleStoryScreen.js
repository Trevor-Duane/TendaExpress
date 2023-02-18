import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import React from 'react'
import { ArrowLeftIcon, ArrowLongLeftIcon } from 'react-native-heroicons/solid';

export default function SingleStoryScreen() {
  const navigation =  useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
        <View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    className="p-3">
                    <ArrowLongLeftIcon size={24} color="#6C0BA9" />
                </TouchableOpacity>
            </View>

            <View className="px-3">
                <Image 
                    source={{uri: "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"}}
                    className="w-full h-48 rounded-xl"
                />
            </View>

            <View className="px-3 py-2 flex-row gap-1">
                <Text className="text-gray-400 text-xs">By</Text>
                <Text className="text-gray-600 text-xs">Mwesigwa Godwill</Text>
            </View>

            <View className="p-3">
                <Text className="text-lg font-bold text-left">Lorem Ipsum is simply dummy text of the  simply dummy text of the</Text>
            </View>

            
        </View>
        <View className="mb-96">
            <ScrollView className="p-3">
                <Text className="text-justify text-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum1
                </Text>

                <Text className="text-justify text-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum2
                </Text>

                <Text className="text-justify text-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum3
                </Text>

                <Text className="text-justify text-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum4
                </Text>

                <Text className="text-justify text-gray-500 mb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum5
                </Text>
            </ScrollView>
        </View>
       
    </SafeAreaView>
  )
}