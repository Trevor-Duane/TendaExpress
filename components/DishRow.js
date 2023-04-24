import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter';
import React from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from "react-redux"
import { addToBasket, selectBasketItemsWithId, removeFromBasket, selectBasketItems } from "../reducers/basketSlice";

const DishRow = ({
    id,
    subcategory_id,
    item_name,
    item_image,
    item_description,
    item_price,
}) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemsToBasket = () => {
    dispatch(addToBasket({id, subcategory_id, item_name, item_description, item_price, item_image}));
  } 

  const removeItemsFromBasket = () => {
    if(!items.length > 0) return;

    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200  ${isPressed && "border-b-0"}`}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg">{item_name}</Text>
            <Text className="text-gray-500">{item_description}</Text>
            <Text className="text-purple-800 mt-1 font-bold">
              <Currency quantity={Number(item_price)} currency="UGX" pattern="##,### !"/>
            </Text>
          </View>
          <View>
            <Image 
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
              uri: item_image
            }}
            className="h-20 w-20 bg-gray-300 rounded p-4"/>
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2">
            <TouchableOpacity onPress={removeItemsFromBasket}>
              <MinusCircleIcon size={28} color={items.length > 0 ? "#6C0BA9" : "#E2C0F8"}/>
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon size={28} color="#6C0BA9"/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow