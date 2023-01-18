import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {data} from '../Data/categories';
import ModalBox from './ModalBox';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';


const AllMenu = () => {
  const navigation =  useNavigation();

    const ItemRender = ({imgUrl, name, short_description, price}) => (
      <TouchableOpacity className="mr-2 shadow py-2" onPress={() => {
        navigation.navigate('Modalbox', {
          name,
          price
        });
        }}>
          <Image source={imgUrl} className="h-48 w-48 rounded"/>
          <View className="flex-col items-start justify-between pb-4 px-3 bg-gray-100 rounded-b">
                <View>
                    <Text className="font-semibold text-gray-800 text-lg">{name}</Text>
                    <Text className="text-xs text-gray-500">{short_description}</Text>
                </View>
    
                <View className=" w-full relative">
                    <View className="flex-row items-center justify-between pt-2">
                        <Text className="font-semibold text-purple-600">{price}</Text>
                        <ShoppingCartIcon size={18} color="#a020f0" onPress={() => navigation.navigate('Modalbox')}/>
                    </View>
                </View>
          </View>
        </TouchableOpacity>
    );

  return (
    <View className="px-2">
      <FlatList
       data={data}
       renderItem={({item}) => <ItemRender name={item.name} short_description={item.short_description} price={item.price} imgUrl={{uri: item.imgUrl}}/>}
       horizontal={false}
       numColumns={2}
       keyExtractor={data => data.id}
    />
    </View>
  )
}

export default AllMenu