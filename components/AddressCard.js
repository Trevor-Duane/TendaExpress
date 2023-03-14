import { View, Text, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { Base_Url } from '../constants/api';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowDownLeftIcon, ArrowLeftIcon, EllipsisVerticalIcon, GlobeAmericasIcon, MagnifyingGlassIcon, StopCircleIcon, UserCircleIcon } from 'react-native-heroicons/solid';


export default function AddressCard() {

    const userData = useSelector((state) => state.auth.userData);
    let user_id = userData.user_id
    
    const [option, setOption] = React.useState("");
    const [isSelected, setIsSelected] = React.useState(null);
    const [addressess, setAddresses] =  React.useState([]);

    const addresses = [
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

    const fetctAddresses = async () => {
    await axios.get(`${Base_Url}/${user_id}`, {headers: headers})
    .then((response) => {
        setAddresses(response.data.data)
    })
    .catch(err => {
        console.error(err)
        console.log("error", err.message)
    })
    
    }
    React.useEffect(() => {
    fetctAddresses()
    }, [user_id])
  return (
    <>
   {addresses.map((address, index) => (
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