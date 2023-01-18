import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import GetStarted from './screens/GetStarted'
import LoginScreen from './screens/LoginScreen';
import SignScreen from './screens/SignScreen';
import OrderType from './screens/OrderType';
import PickGo from './screens/PickGo';
import PickGoHome from './screens/PickGoHome';
import ModalBox from './components/ModalBox';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={GetStarted}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Pickgo" component={PickGo}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Modalbox" component={ModalBox}/>
        <Stack.Screen name="Pickhome" component={PickGoHome}/>
        <Stack.Screen name="Ordertype" component={OrderType}/>
        <Stack.Screen name="Signup" component={SignScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
