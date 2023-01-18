import { View, Text, Pressable, TextInput, Modal} from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/solid'
import React, { useLayoutEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

const ModalBox = () => {
    const navigation =  useNavigation();
    // const [modalVisible, setModalVisible] = useState(true);

    const {params:{
        name,
        price
    }} = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, [])
  return (
    <View className="flex-1 justify-center items-center">
        <Modal
            style={{margin: "auto", display: "block", justifyContent: "center", alignItems: "center" }}
            animationType="none"
            // visible={modalVisible}
            transparent={false}
            presentationStyle="pageSheet"
            >
            <View className="flex-col relative bg-purple-300 w-72 h-72 shadow rounded">
            

                <View className="flex-row justify-between items-center border-b border-gray-200 px-1 py-2">
                    <Text className="text-2xl text-purple-600 font-bold capitalize">{name}</Text>
                    <XMarkIcon size={18} color="#A020F0" className="font-bold"/>
                </View>
                
                <View className="flex-row items-center relative">
                    {/* col-1 */}
                    <View className="flex-grow px-1 py-1">
                        <View>
                            <View className="pb-2">
                                <Text>Size</Text>
                            </View>
                            <View className="pb-2">
                                <TextInput className="text-purple-800 text-base w-full h-11 px-2 bg-gray-200 rounded-md"/>
                            </View>
                        </View>

                        <View>
                            <View className="pb-2">
                                <Text>Add-ons</Text>
                            </View>
                            <View className="pb-2">
                                <TextInput className="text-purple-800 text-base w-full h-11 px-2 bg-gray-200 rounded-md"/>
                            </View>
                        </View>

                        <View>
                            <View className="pb-2">
                                <Text>Price</Text>
                            </View>
                            <View className="pb-2">
                                <Text>{price}</Text>
                            </View>
                        </View>
                    </View>
                    {/* col-2 */}
                    <View className="relative flex-grow px-1 py-1">
                        <View>
                            <View className="pb-2">
                                <Text>Reciepe</Text>
                            </View>
                            <View className="pb-2">
                                <TextInput className="text-purple-800 text-base w-full h-11 px-2 bg-gray-200 rounded-md"/>
                            </View>
                        </View>

                        <View>
                            <View className="pb-2">
                                <Text>Quantity</Text>
                            </View>
                            <View className="pb-2">
                                <TextInput className="text-purple-800 text-base w-full h-11 px-2 bg-gray-200 rounded-md"/>
                            </View>
                        </View>

                        <View className="py-2">
                            <Pressable className="bg-purple-600 py-2 items-center justify-center border rounded-md border-solid border-white">
                                <Text>Add to cart</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            
            </View>
        </Modal>
    </View>
  )
}

export default ModalBox