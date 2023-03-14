import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import GetStarted from '../screens/GetStarted';
import LoginScreen from '../screens/LoginScreen';
import SignScreen from '../screens/SignScreen';
import PickGo from '../screens/PickGo';
import PickGoHome from '../screens/PickGoHome';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
   <NavigationContainer>
     <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Getstarted" component={GetStarted}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Signup" component={SignScreen}/>
        <RootStack.Screen name="Pickgo" component={PickGo}/>
        <RootStack.Screen name="Pickgohome" component={PickGoHome}/>
    </RootStack.Navigator>
   </NavigationContainer>
    

);

export default RootStackScreen