
import { ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import FlashMessage from "react-native-flash-message";

import Routes from './navigation/Routes';

import { Provider } from 'react-redux';
import store from './store/store';
import { getUserData } from './utils/utils';
import { saveUserData } from './actions/auth';


export default function App() {

  useEffect(() => {
    (async() => {
      const userData = await getUserData()
      console.log("userData App.js", userData)
      if(!!userData){
        saveUserData(userData)
      }
    })();
  }, []) 
    
  return (
        <Provider store={store}>
          <Routes/>
          <FlashMessage position="top"/>
        </Provider>
  );
}