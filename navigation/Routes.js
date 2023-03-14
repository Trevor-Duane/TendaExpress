import { ActivityIndicator } from 'react-native';
import React from 'react';

/* navigation */
import RootStackScreen from './RootStackScreen';
import DrawerStackScreen from './DrawerStackScreen';

import { useSelector } from 'react-redux';

export default function Routes() {
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData", userData)

    return (
        <>
        { !!userData && userData?.token ? <DrawerStackScreen/> : <RootStackScreen/>
        }
        </>
            
    )
}
