import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = () => {

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      {/* Categories */}
      <CategoryCard 
        imgUrl="https://cdn-icons-png.flaticon.com/512/2276/2276931.png" 
        title="testing 1"
      />

      <CategoryCard 
        imgUrl="https://cdn-icons-png.flaticon.com/512/2276/2276931.png" 
        title="testing 2"
      />
      <CategoryCard 
        imgUrl="https://cdn-icons-png.flaticon.com/512/2276/2276931.png" 
        title="testing 3"
      />

    </ScrollView>
      
  )
}

export default Categories