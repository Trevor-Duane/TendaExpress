import { View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import DropDownPicker from 'react-native-dropdown-picker';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const Feedback = () => {
    const navigation =  useNavigation();

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(['italy', 'spain', 'barcelona', 'finland']);
    const [items, setItems] = React.useState([
        {label: 'Spain', value: 'spain'},
        {label: 'Madrid', value: 'madrid', parent: 'spain'},
        {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
        {label: 'Italy', value: 'italy'},
        {label: 'Rome', value: 'rome', parent: 'italy'},
        {label: 'Finland', value: 'finland'}
    ]);


    const FeedbackForm = () => {
        return(
            <View>
                <View className="p-2">
                    {/* <View style={{
                        backgroundColor: '#171717',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                        }}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View> */}

                   <View className="py-1">
                        <TextInput
                            placeholder="Email Address"
                            className="text-purple-800 text-base h-12 px-2 bg-white rounded-md"
                            />
                    </View>

                    <View className="py-1">
                        <TextInput
                            editable
                            placeholder='Give Your Feedback'
                            textAlignVertical='top'
                            multiline={true}
                            numberOfLines={12}
                            maxLength={40}
                            className="text-purple-800 text-base px-2 bg-white rounded-md"
                        />
                    </View>

                    <View className="flex-row justify-end p-2">
                        <Pressable
                            onPress={() => {}}
                            className="bg-purple-600 p-2 items-center justify-center border rounded-md border-solid border-white w-1/4 relative">
                            <Text className="text-white text-xl">Send</Text>
                        </Pressable>
                   </View>
                </View>
            </View>
        )
    }

  return (
    <SafeAreaView className="flex-1 bg-[#A020F0]">
        <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>
        {/* Header */}
         <View className="bg-[#A020F0]s">
               <View className="flex-row items-center px-2 pt-2 pb-1 justify-between">
                    <TouchableOpacity className="rounded px-1 shadows" onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon 
                            size={20} 
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <View className="flex-1">
                        <Text className="font-extrabold text-xl text-center text-white">Feedback</Text>
                    </View>
                </View>
         </View>

         <View className="flex-1 bg-gray-200">
            <FeedbackForm/>
         </View>

    </SafeAreaView>
  )
}

export default Feedback