import { View, Text, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowDownLeftIcon, ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, MagnifyingGlassIcon, StopCircleIcon, UserCircleIcon } from 'react-native-heroicons/solid';


export default function AddressCard() {
  return (
    <View className="flex-row justify-between items-center mx-2 my-2 border rounded border-gray-200 p-2">
            {/* left view */}
            <View>
                <View className="flex-row gap-2 items-center">
                    <View>
                        <GlobeAmericasIcon
                            onPress={() => {}}
                            title='right drawer'
                            size={22} color="#000"
                            className="p-4"/>
                    </View>
                    <View>
                        <Text>Office</Text>
                    </View>
                </View>
                <View>
                    <Text className="text-[12px] text-gray-500">Bwebajja, Tenda House, Entebbe Road</Text>
                    <Text className="text-[12px] text-gray-500">House 2/ Floor 2</Text>
                </View>
            </View>

            {/* right view */}
            <View>
                <StopCircleIcon
                    onPress={() => {}}
                    title='right drawer'
                    size={36} color="#000"
                    className="p-4"/>
            </View>
        </View>
  )
}