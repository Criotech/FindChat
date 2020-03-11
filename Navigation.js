import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Verify from './screens/Verify';
import Profile from './screens/Profile';
import Main from './screens/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name="Verify" component={Verify}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Main" component={Main} options={{
          title: 'FindChat',
          headerStyle: {
            backgroundColor: '#000000',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: null,
          headerRight: () => (
            <View style={styles.headerRight}>
            <Ionicons name="ios-search" size={25} color="#fff" style={{marginRight: 20}} />
            <Ionicons name="md-more" size={25} color="#128C7E" />
            </View>
          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 23
          },
        }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    paddingRight: 20
  }
});
