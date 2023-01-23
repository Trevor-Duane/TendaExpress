
import React, { useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'react'

import { Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';
import CartScreen from './screens/CartScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DiscoverScreen from './screens/DiscoverScreen';
import ProfileScreen from './screens/ProfileScreen';
import SingleScreen from './screens/SingleScreen';
import CategoryScreen from './screens/CategoryScreen';
// import BasketScreen from './screens/BasketScreen';

import { AuthContext } from './components/Context';
import { Provider } from 'react-redux';
import { store } from './store';
const Drawer = createDrawerNavigator();


export default function App() {
  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      userToken =  String(foundUser[0].userToken);
      email = foundUser[0].email;
    
       try {
          await AsyncStorage.setItem('userToken', userToken)
       }
       catch(e){
          console.log(e)
       }
  
      dispatch({ type: 'LOGIN', id: email, token: userToken })
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })

    },
    signUp: () => {
      // setUserToken('duane');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }
      catch(e){
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000)
  }, []);

  if(loginState.isLoading){
    return(
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#A020F0"/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Provider store={store}>
            {loginState.userToken !== null ? (
              <Drawer.Navigator  screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={MainTabScreen} />
                <Drawer.Screen name="Cart" component={CartScreen} />
                <Drawer.Screen name="Discover" component={DiscoverScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Single" component={SingleScreen} />
                <Drawer.Screen name="Catscreen" component={CategoryScreen} />
                {/* <Drawer.Screen name="Baskets" component={BasketScreen} options={{presentation: "modal"}} /> */}
                </Drawer.Navigator> 
              )
            :
            <RootStackScreen/>
            }
          </Provider> 
        </NavigationContainer>
    </SafeAreaProvider>
    </AuthContext.Provider>
    
  );
}
