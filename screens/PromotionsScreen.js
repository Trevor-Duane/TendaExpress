import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress'
import React from 'react'
import PromoCard from '../components/PromoCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Base_Url } from '../constants/api';
import axios from 'axios';
import headers from '../constants/headers';
import { useSelector } from 'react-redux'


const PromotionsScreen = () => {
  const navigation =  useNavigation();
    const userData = useSelector((state) => state.auth.userData);

    const [offers, setOffers] = React.useState([
      // {
      //   "id": 1,
      //   "offer_img": "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg",
      //   "offer_title": "Pizza Offer",
      //   "offer_day": "Every Saturday",
      //   "offer_body": "Buy One Get One Free"
      // }
    ])

    const [isLoading, setIsLoading] = React.useState(false)


    //fetch offers
    const fetchOffers = async () => {
        try {
          setIsLoading(true)
          await axios.get(`${Base_Url}/offers`, {headers: headers})
        .then(response => {
            console.log(response.data)
            setOffers(response.data.data)
            setIsLoading(false)
        })
        .catch(err => {
          setIsLoading(false)
            console.error(err)
            console.log("error", err.message)
        })
        } catch (error) {
          setIsLoading(false)
          console.log(error)
          
        }
    }

    React.useEffect(() => {
    fetchOffers()
    }, [])
  return (
    <SafeAreaView className="bg-[#A020F0] flex-1">
      <StatusBar backgroundColor='#A020f0' barStyle="light-content"/>

      <View className="flex-row justify-between items-center">
        <View className="p-2">
            <Text className="text-xl font-black  text-white">Offers</Text>
        </View>

        <View className="p-2">
            <Text className="bg-gray-100 text-[#A020F0] py-1 px-3 rounded-xl">Active Offers</Text>
        </View>
      </View>

      {isLoading ? 
      <View className="items-center justify-center flex-1">
        <View className="items-center justify-center">
            <Progress.Circle size={40} indeterminate={true} borderWidth={2} color="#ffffff"/>
        </View>
      </View>
      : 
      <View className="bg-white pt-2 flex-1">
        {/* <View className="py-3"> */}
         {offers.length === 0 ? (
          <View className="flex-1 justify-center items-center">
             <View className="items-center justify-center">
              <MaterialCommunityIcons name="food-turkey" color="#E2c0F8" size={96} />
              <Text className="text-base text-gray-600 text-center">Sorry, No Offers Available</Text>
             </View>
          </View>
         ) : (
          <ScrollView>
            {offers.map(offer => 
              <PromoCard
                key={offer.id}
                offer_cover={offer.offer_cover}
                offer_title={offer.offer_title}
                offer_day={offer.offer_day}
                offer_body={offer.offer_body}
              />
              )}
          </ScrollView>
         )}
        {/* </View> */}
      </View>}
    </SafeAreaView>
  )
}

export default PromotionsScreen

