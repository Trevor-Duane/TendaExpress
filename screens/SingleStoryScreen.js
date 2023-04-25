import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, TextInput } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


import React from 'react'
import { ArrowLeftIcon, ArrowLongLeftIcon, HandThumbDownIcon, HandThumbUpIcon } from 'react-native-heroicons/solid';
import { Divider } from 'react-native-paper';

export default function SingleStoryScreen() {
  const navigation =  useNavigation();

  const [value, onChangeText] = React.useState("")

  return (
    <SafeAreaView className="bg-white flex-1">
        <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        <ScrollView className="pt-2">
            <View>
                <View className="px-2 shadow">
                    <Image 
                        source={{uri: "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"}}
                        className="w-full h-56 p-4 rounded-t-xl bg-gray-300"
                    />

                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className="p-2 bg-gray-100 absolute left-4 top-2 rounded-full">
                        <ArrowLeftIcon size={20} color="#6C0BA9" />
                    </TouchableOpacity>
                </View>

                <View className="px-2 py-2 flex-row gap-1">
                    <Text className="text-gray-400 text-xs">By</Text>
                    <Text className="text-gray-600 text-xs">Mwesigwa Godwill</Text>
                </View>

                <View className="p-2">
                    <Text className="text-lg font-bold text-left">Lorem Ipsum is simply dummy text of the  simply dummy text of the</Text>
                </View>
                
            </View>


            <View className="px-2 pt-4">
                    <Text className="text-justify text-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum1
                    </Text>

                    <Text className="text-justify text-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum2
                    </Text>

                    <Text className="text-justify text-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum3
                    </Text>

                    <Text className="text-justify text-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum4
                    </Text>

                    <Text className="text-justify text-gray-500 mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum5
                    </Text>
            </View>

            <View>
                <View className="border-b border-t border-gray-100 bg-purple-200 flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Text className="text-lg p-2 text-[#6C0BA9] font-bold">Comments</Text>
                        <Text className="text-base bg-purple-400 rounded text-white px-1">23</Text>
                    </View>

                    <View className="flex-row items-center space-x-4 p-2">
                        <Pressable>
                            <HandThumbUpIcon size={20} color="#6C0BA9"/>
                        </Pressable>

                        <Pressable>
                            <HandThumbDownIcon size={20} color="#6C0BA9"/>
                        </Pressable>
                    </View>
                </View>
                
                <View className="pb-16 pt-4">
                    <View className="px-2">
                        <TextInput
                            editable
                            placeholder='Write comment here'
                            textAlignVertical='top'
                            multiline={true}
                            numberOfLines={8}
                            maxLength={40}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            className="bg-gray-200 rounded-md px-2 text-base"/>
                    </View>

                   <View className="flex-row justify-end p-2">
                        <Pressable
                            onPress={() => {}}
                            className="bg-purple-600 p-2 items-center justify-center border rounded-md border-solid border-white w-1/4 relative">
                            <Text className="text-white text-xl">Publish</Text>
                        </Pressable>
                   </View>
                   <Divider/>

                   <View>
                    {/* turn it into a component */}

                    <View className="p-2 space-y-2 border-b border-gray-200">
                        <View className="flex-row items-center justify-start space-x-2">
                            <Image
                                source={{ uri: "https://1.bp.blogspot.com/-jT3iMi7DHgk/YGlXGHq49HI/AAAAAAAAjFQ/cZ7xr6PXmKw19239vFcHku_LOovpVP6MACLcBGAsYHQ/s16000-rw/New%2BHijabi%2BGirls%2BDP%2Bfor%2B%2Bsocial%2BMedia%2BProfile%2B2021%2B%252830%2529.jpg"}}
                                className="h-12 w-12 rounded-full"/>
                            <Text className="text-black font-bold text-base">John Doe</Text>
                            <View className="w-1 h-1 rounded-full bg-slate-500"></View>
                            <Text className="text-base text-gray-500 font-semibold">6m ago</Text>
                        </View>
                        <View>
                            <Text>This is John Does's Comment</Text>
                        </View>
                    </View>
                    
                    <View className="p-2 space-y-2 border-b border-gray-200">
                        <View className="flex-row items-center justify-start space-x-2">
                            <Image
                                source={{ uri: "https://1.bp.blogspot.com/-jT3iMi7DHgk/YGlXGHq49HI/AAAAAAAAjFQ/cZ7xr6PXmKw19239vFcHku_LOovpVP6MACLcBGAsYHQ/s16000-rw/New%2BHijabi%2BGirls%2BDP%2Bfor%2B%2Bsocial%2BMedia%2BProfile%2B2021%2B%252830%2529.jpg"}}
                                className="h-12 w-12 rounded-full"/>
                            <Text className="text-black font-bold text-base">John Doe</Text>
                            <View className="w-1 h-1 rounded-full bg-slate-500"></View>
                            <Text className="text-base text-gray-500 font-semibold">6m ago</Text>
                        </View>
                        <View>
                            <Text>This is John Does's Comment</Text>
                        </View>
                    </View>

                    {/* to be turned into a component */}
                   </View>
                </View>
            </View>
        </ScrollView>  
    </SafeAreaView>
  )
}