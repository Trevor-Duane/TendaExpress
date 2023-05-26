import { View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native'
import { ActivityIndicator } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { showSuccess } from '../../utils/helperFunction';
import axios from 'axios';
import { Base_Url } from '../../constants/api';
import headers from '../../constants/headers';

const Feedback = () => {
    const navigation =  useNavigation();

    const userData = useSelector((state) => state.auth.userData);

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        {label: 'Food', value: 'food'},
        {label: 'Service', value: 'service'},
      
    ]);

    const [isLoading, setIsLoading] = React.useState(false)

    const [customer_id, setCustomer_id] = React.useState(userData.user.id)
    const [username, setUsername] = React.useState(userData.user.username)
    const [contact, setContact] = React.useState(userData.user.phonenumber)
    const [email, setEmail] = React.useState("")
    const [feedback, setFeedback] = React.useState("")

    const postFeedback = async () => {
        setIsLoading(true)
    
        try {
          await axios.post(`${Base_Url}/feedback`, {
              customer_id: customer_id,
              username: username,
              feedback_on: value,
              contact: contact,
              email: email,
              feedback: feedback,
          }, {headers: headers})
          .then(response => {
              console.log(response)

              showSuccess("feedback sent successfully")
              setCustomer_id("")
              setUsername("")
              setValue(null)
              setContact("")
              setEmail("")
              setFeedback("")

          }).catch(error => {
              if(error.response){
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              } else if(error.request){
              console.log(error.request);
              } else {
              console.log(error.message)
              }
              console.log(error.config)
  
          })
        } catch (error) {
          console.log(error)
          
        }
        setIsLoading(false)

      }


    const FeedbackForm = () => {
        return(
            <View className="items-center justify-center w-screen">
                <View className="p-2 w-full">
                    <View className="py-1">
                        <Text className="py-2">Feedback On</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>

                   <View className="py-1">
                    <Text className="py-2">Email</Text>
                        <TextInput
                            placeholder="Email Address"
                            placeholderTextColor="#000"
                            value={email}
                            // onChange={(event) => setEmail(event.nativeEvent.text)} 
                            onChangeText={email => setEmail(email)} 
                            className="text-purple-800 text-base h-12 px-2 bg-white rounded-md border" 
                            />
                    </View>

                    <View className="py-1">
                        <Text className="py-2">Your Feedback</Text>
                        <TextInput
                            editable
                            placeholderTextColor="#000"
                            placeholder='Give Your Feedback'
                            textAlignVertical='top'
                            multiline={true}
                            numberOfLines={12}
                            maxLength={40}
                            value={feedback}
                            onChangeText={feedback => setFeedback(feedback)} 
                            // onChange={(event) => setFeedback(event.nativeEvent.text)} 
                            className="text-purple-800 text-base px-2 py-2 bg-white rounded-md border"
                        />
                    </View>

                    <View className="flex-row justify-end p-2">
                        <Pressable
                            onPressIn={postFeedback}
                            className="bg-purple-600 p-2 items-center justify-center border rounded-md border-solid border-white w-1/4 relative"
                        >
                            {isLoading ? <ActivityIndicator size="small" color="#FFFFFF"/> : <Text className="text-white text-xl">Send</Text>}
                            
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