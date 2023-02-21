import { View, Text, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowDownLeftIcon, ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, MagnifyingGlassIcon, StopCircleIcon, UserCircleIcon } from 'react-native-heroicons/solid';


export default function AddressCard() {
    const [option, setOption] = React.useState("");
    const [isSelected, setIsSelected] = React.useState(null);

    const addreses = [
        {
            id: 1,
            title: "Bweya",
            street_name: "Bweya road",
            landmark: "kingsway school",
            house: "flat 2"
        },
        {
            id: 2,
            title: "Sisa",
            street_name: "st mary's road",
            landmark: "st mary's school",
            house: "flat 3"
        },
        {
            id: 3,
            title: "Akright",
            street_name: "alkright road",
            landmark: "serenity center",
            house: "flat 4"
        }, 
      ]
  return (
    <>
   {addreses.map((address, index) => (
 <TouchableOpacity
    key={address.id}
    onPress={() => {
        setIsSelected(address.id)
        setOption(address.title)
      }}
    style={{
        borderWidth: 1,
        borderColor: isSelected == address.id ? '#A020F0' : '#BEBEBE'
    }}
    className="flex-row justify-between items-center mx-2 my-2 border rounded p-2"
    >
 {/* left view */}
    <View>
        <View className="flex-row gap-2 items-center">
            <View>
                <GlobeAmericasIcon
                    onPress={() => {}}
                    title='right drawer'
                    size={22} color={isSelected == address.id ? "#A020F0" : "#000"}
                    className="p-4"/>
            </View>
            <View>
                <Text className={`${isSelected == address.id ? "font-bold text-purple-800" : "text-black"}`}>{address.title}</Text>
            </View>
        </View>
        <View>
            <Text className="text-[12px] text-gray-500">{address.street_name}</Text>
            <Text className="text-[12px] text-gray-500">{address.house}</Text>
        </View>
    </View>

 {/* right view */}
    <View>
        <StopCircleIcon
            onPress={() => {}}
            title='right drawer'
            size={36} color={isSelected == address.id ? "#A020F0" : "#000"}
            className="p-4"/>
    </View>
</TouchableOpacity>
   ))}
   </>
  )
}