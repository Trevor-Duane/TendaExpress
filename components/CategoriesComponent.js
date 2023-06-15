import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import React, {useEffect, useState} from 'react';
import CategoryCard from './CategoryCard';
import axios from 'axios';
import { Base_Url } from '../constants/api';

const CategoriesComponent = () => {
const [Categories, setCategories] = React.useState([]);
// const [isLoading, setIsLoading] = React.useState(false);

const headers = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

const fetctCategories = async () => {
 try {
  // setIsLoading(true)
  await axios.get(`${Base_Url}/categories`, {headers: headers})
  .then((response) => {
    // setIsLoading(false)
    setCategories(response.data.data)
  })
  .catch(err => {
    // setIsLoading(false)
    console.error(err)
    console.log("error", err.message)
  })
 } catch (error) {
  // setIsLoading(false)
  console.log(error)
 }
  
}
useEffect(() => {
  fetctCategories()
}, [])
  return (
    
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      width: "100%"
    }}>

    {/* {isLoading ? 
    <View className="items-center justify-center flex-1">
      <View className="items-center justify-center">
          <Progress.Circle size={40} indeterminate={true} borderWidth={2} color="#ffffff"/>
      </View>
    </View>
    : */}
    <View className="flex-row flex-wrap mt-2 pt-3 pb-4 w-screen justify-between bg-white">
      {Categories.map((Category) => (
           <CategoryCard 
           key={Category.id}
           id={Category.id}
           category_image={Category.category_image} 
           category_name={Category.category_name}
           category_description={Category.category_description}
         />
      ))}
    </View>
    {/* } */}
</ScrollView>  
  ) 
}

export default CategoriesComponent