import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/Context';



const DrawerContent = (props) => {

  const { signOut } = useContext(AuthContext);
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View>
                <Avatar.Image
                source={{
                  uri: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                }}
                size={50}
                />
              </View>

              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <View>
                  <Title style={styles.title}>Username</Title>
                </View>

                <View>
                  <Caption style={styles.caption}>Username@gmail.com</Caption>
                </View>
              </View>
            </View>

          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="account" 
                  color={color}
                  size={size}
                  />
              )}
              label="My Profile"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="database" 
                  color={color}
                  size={size}
                  />
              )}
              label="My Orders"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="map-marker" 
                  color={color}
                  size={size}
                  />
              )}
              label="Delivery Address"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="credit-card-outline" 
                  color={color}
                  size={size}
                  />
              )}
              label="Payment Methods"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="cog" 
                  color={color}
                  size={size}
                  />
              )}
              label="Settings"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="help-circle" 
                  color={color}
                  size={size}
                  />
              )}
              label="Help & FAQs"
              onPress={() => {}}
            />

          </Drawer.Section>
        </View>

      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons 
              name="power" 
              color={color}
              size={size}
              />
          )}
          label="Logout"
          onPress={() => {signOut()}}
          />
      </Drawer.Section>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  drawerContent:{
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title:{
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14, 
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,

  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  },

});
