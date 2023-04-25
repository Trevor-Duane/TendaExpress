import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import {Dishes} from '../data/dishes';
import ModalBox from './ModalBox';
import DishCard from './DishCard';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';


const PickGoMenu = () => {
  const navigation =  useNavigation();
  // console.log(Dishes)

    const ItemRender = ({imgUrl, name, short_description, price}) => (
      <TouchableOpacity className="mr-2 shadow py-2">
          <Image source={imgUrl} className="h-48 w-48 rounded"/>
          <View className="flex-col items-start justify-between pb-4 px-3 bg-gray-100 rounded-b">
                <View>
                    <Text className="font-semibold text-gray-800 text-lg">{name}</Text>
                    <Text className="text-xs text-gray-500">{short_description}</Text>
                </View>
    
                <View className=" w-full relative">
                    <View className="flex-row items-center justify-between pt-2">
                        <Text className="font-semibold text-purple-600">{price}</Text>
                        <TouchableOpacity style={styles.button} className="shadow-lg">
                          <ShoppingCartIcon size={24} color="#a020f0" onPress={() => {
                            navigation.navigate('Single', {
                              name,
                              price,
                              short_description,
                              imgUrl,
                            });
                            }}/>
                    </TouchableOpacity>
                        
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

export default PickGoMenu

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