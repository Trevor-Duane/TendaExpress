import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import CategoryCard from './CategoryCard'
import axios from 'axios'
import Base_Url from '../constants/api'

const CategoriesComponent = () => {
const [Categories, setCategories] = React.useState([]);

const headers = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

const fetctCategories = async () => {
  await axios.get(`${Base_Url}/categories`, {headers: headers})
  .then((response) => {
    setCategories(response.data.data)
  })
  .catch(err => {
    console.error(err)
    console.log("error", err.message)
  })
  
}
useEffect(() => {
  fetctCategories()
}, [])
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10
      }}
    >
      {Categories.map((Category) => (
         <CategoryCard 
         key={Category.id}
         id={Category.id}
         category_image={Category.category_image} 
         category_name={Category.category_name}
         category_description={Category.category_description}
       />
      ))}
    </ScrollView>
      
  ) 
}

export default CategoriesComponent