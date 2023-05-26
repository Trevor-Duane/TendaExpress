import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PromoCard({offer_cover, offer_title, offer_day, offer_body}) {
  const navigation =  useNavigation();

  return (
    <TouchableOpacity className="flex-row items-center justify-center mb-4 gap-3 border-b border-gray-100 p-2">
        {/* left */}
        <View>
            <View>
                <Image 
                    source={{uri: offer_cover}}
                    className="h-24 w-24 rounded-lg"
                />
            </View>
            <View className="absolute top-2 left-2">
                <Text className="bg-white text-xs text-gray-600 rounded-lg px-2">{offer_title}</Text>
            </View>
        </View>
        {/* right */}
        <View className="flex-1">
            <View>
                <Text className="text-xs text-gray-400">{offer_day}</Text>
            </View>

            <View className="flex-1">
                <Text className="text-base font-bold" onPress={() => {}}>{offer_body}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}