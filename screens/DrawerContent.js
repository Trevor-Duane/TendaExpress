import React, { useContext } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import actions from '../actions';




const DrawerContent = (props) => {
  const userData = useSelector((state) => state.auth.userData)

  const navigation =  useNavigation();


  const signOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout from this account',
      [{text: 'Yes', onPress: logout}, {text: 'No',}],{cancelable: true}
    )
  }
  const logout = () => {
    actions.logout()
  }

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
                  <Title style={styles.title}>{userData.user.username}</Title>
                </View>

                <View>
                  <Caption style={styles.caption}>{userData.user.email}</Caption>
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
              label="My Account"
              onPress={() => navigation.navigate('Profile')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="history" 
                  color={color}
                  size={size}
                  />
              )}
              label="Order History"
              onPress={() => navigation.navigate('History')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="food" 
                  color={color}
                  size={size}
                  />
              )}
              label="Chef's Specials"
              // onPress={() => navigation.navigate('Specials')}
              onPress={() => alert('Specials Coming Soon, Sorry!!!')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="comment-quote" 
                  color={color}
                  size={size}
                  />
              )}
              label="Give Feedback"
              onPress={() => navigation.navigate('Feedbacks')}
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
              onPress={() => navigation.navigate('Settings')}
            />

            {/* <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons 
                  name="help-circle" 
                  color={color}
                  size={size}
                  />
              )}
              label="Help & FAQs"
              onPress={() => navigation.navigate('Help')}
            /> */}

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
          onPress={signOut}
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
