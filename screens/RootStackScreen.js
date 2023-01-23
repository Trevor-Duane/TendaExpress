import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from './GetStarted';
import LoginScreen from './LoginScreen';
import SignScreen from './SignScreen';
import PickGo from './PickGo';
import PickGoHome from './PickGoHome';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Getstarted" component={GetStarted}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Signup" component={SignScreen}/>
        <RootStack.Screen name="Pickgo" component={PickGo}/>
        <RootStack.Screen name="Pickgohome" component={PickGoHome}/>

    </RootStack.Navigator>

);

export default RootStackScreen