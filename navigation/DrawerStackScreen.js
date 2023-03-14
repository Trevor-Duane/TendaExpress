import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
/* navigation */
import DrawerContent from '../screens/DrawerContent';
import MainTabScreen from './MainTabScreen';

/* screens */
import CartScreen from '../screens/CartScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SingleScreen from '../screens/SingleScreen';
import CategoryScreen from '../screens/CategoryScreen';
import BasketScreen from '../screens/BasketScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import AcceptOrder from '../screens/AcceptOrder';
import PaymentsScreen from '../screens/PaymentsScreen';
import MapScreen from '../screens/MapScreen';
import ChooseOrderType from '../screens/ChooseOrderType';
import AddressScreen from '../screens/AddressScreen';
import SingleStoryScreen from '../screens/SingleStoryScreen';
import OrderTracking from '../screens/OrderTracking';
import PaymentSuccess from '../screens/PaymentSuccess';

const Drawer = createDrawerNavigator();


export default function DrawerStackScreen() {
  return (
    <NavigationContainer>
              <Drawer.Navigator  screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={MainTabScreen} />
                <Drawer.Screen name="Cart" component={CartScreen} />
                <Drawer.Screen name="Discover" component={DiscoverScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Single" component={SingleScreen} />
                <Drawer.Screen name="Catscreen" component={CategoryScreen} />

                <Drawer.Group screenOptions={{presentation: "model"}}>
                  <Drawer.Screen name="Baskets" component={BasketScreen} />
                  <Drawer.Screen name="Chooseordertype" component={ChooseOrderType}/>
                  <Drawer.Screen name="Addaddress" component={AddAddressScreen}/>
                  <Drawer.Screen name="Singlestory" component={SingleStoryScreen}/>
                  <Drawer.Screen name="Address" component={AddressScreen}/>
                  <Drawer.Screen name="Acceptorder" component={AcceptOrder}/>
                  <Drawer.Screen name="Payments" component={PaymentsScreen}/>
                  <Drawer.Screen name="PaymentSuccess" component={PaymentSuccess} options={{gestureEnabled: false}}/>
                  <Drawer.Screen name="Tracking" component={OrderTracking} options={{gestureEnabled: false}}/>
                  <Drawer.Screen name="Map" component={MapScreen}/>
                </Drawer.Group>

                </Drawer.Navigator> 
        </NavigationContainer>
  )
}