import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = () => {

  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10
      }}
    >
      {/* Categories */}
      <CategoryCard 
        imgUrl="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=1060&t=st=1672996841~exp=1672997441~hmac=fb56f5ad0100671c975a906c62266c5f8ed2c8089934b2e7b4f34b570a773b5a" 
        title="Cat 1"
      />

      <CategoryCard 
        imgUrl="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=1060&t=st=1672996841~exp=1672997441~hmac=fb56f5ad0100671c975a906c62266c5f8ed2c8089934b2e7b4f34b570a773b5a" 
        title="Cat 2"
      />
      <CategoryCard 
        imgUrl="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=1060&t=st=1672996841~exp=1672997441~hmac=fb56f5ad0100671c975a906c62266c5f8ed2c8089934b2e7b4f34b570a773b5a" 
        title="Cat 3"
      />
       <CategoryCard 
        imgUrl="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=1060&t=st=1672996841~exp=1672997441~hmac=fb56f5ad0100671c975a906c62266c5f8ed2c8089934b2e7b4f34b570a773b5a" 
        title="Cat 1"
      />

      <CategoryCard 
        imgUrl="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=1060&t=st=1672996841~exp=1672997441~hmac=fb56f5ad0100671c975a906c62266c5f8ed2c8089934b2e7b4f34b570a773b5a" 
        title="Cat 2"
      />
      <CategoryCard 
        imgUrl="https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?w=1060&t=st=1672996841~exp=1672997441~hmac=fb56f5ad0100671c975a906c62266c5f8ed2c8089934b2e7b4f34b570a773b5a" 
        title="Cat 3"
      />

    </ScrollView>
      
  )
}

export default Categories