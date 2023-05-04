import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import Discover from '../screens/DiscoverScreen';
import OrderTracking from '../screens/OrderTracking';
import RunningOrders from '../screens/RunningOrders';
import BasketScreen from '../screens/BasketScreen';
import PromotionsScreen from '../screens/PromotionsScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      activeColor="#A020F0"
      barStyle={{ backgroundColor: 'white', shadowColor:"white", borderTopWidth: 1, borderTopColor: "#F5f5f5" }}
    >
      <Tab.Screen
        name="Homepage"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Baskets"
        component={BasketScreen}
        options={{
          tabBarLabel: 'My Basket',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={PromotionsScreen}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-turkey" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Track"
        component={RunningOrders}
        options={{
          tabBarLabel: 'Track Order',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="radar" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabScreen