import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import {Dishes} from '../data/dishes';
import Currency from 'react-currency-formatter';
import ModalBox from './ModalBox';
import DishCard from './DishCard';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';


const SpecialsMenu = () => {
  const navigation =  useNavigation();
  // console.log(Dishes)

    const ItemRender = ({imgUrl, name, short_description, price}) => (
      <TouchableOpacity
        className="mr-2 shadow py-2"
        onPress={() => {
          navigation.navigate('Single', {
            name,
            price,
            short_description,
            imgUrl,
          });
          }}
        >
          <Image source={imgUrl} className="h-48 w-48 rounded"/>
          <View className="items-start justify-between bg-gray-100 rounded-b p-2">
                <View>
                    <Text className="font-semibold text-gray-800 text-lg capitalize">{name}</Text>
                </View>
    
                <View>
                    <View className="flex-row items-center justify-between pt-2">
                        <Text className="font-semibold text-purple-600">
                          <Currency quantity={Number(+price)} currency="UGX" pattern="##,### !"/>
                        </Text>  
                    </View>
                </View>
          </View>
        </TouchableOpacity>
    );

  return (
    <View className="px-2">
      <FlatList
       data={Dishes}
       renderItem={({item}) => <ItemRender name={item.name} short_description={item.short_description} price={item.price} imgUrl={{uri: item.imgUrl}}/>}
       horizontal={false}
       numColumns={2}
       keyExtractor={data => data.id}
    />
    </View>
  )
}

export default SpecialsMenu

const styles = StyleSheet.create({
  button:{
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})