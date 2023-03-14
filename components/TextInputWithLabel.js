import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function TextInputWithLabel({
    label,
    value,
    placeholder,
    inputStyle,
    textStyle,
    isSecure,
    onChangetext, 
    ...props
}) {
  return (
    <View>
        <Text className="px-2 pt-4 pb-2 text-base font-bold text-purple-900">{label}</Text>
        <TextInput
            className="text-purple-800 text-base w-96 h-12 px-2 bg-gray-200 rounded-md"
            value={value}
            placeholder={placeholder}
            {...props}

        />
    </View>
  )
}