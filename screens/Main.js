import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Chatpage from './MainFolder/Chat';
import Contacts from './MainFolder/Contacts';
import Interact from './MainFolder/Interact'

function ChatScreen() {
    return (
        <Chatpage />
    );
}

function ContactsScreen() {
    return (
        <Contacts />
    );
}


function newStackNav() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={Chatpage} options={{headerShown: false}} />
        <Stack.Screen name="Interact" component={Interact}  options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


export default class Main extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#fff',
                    inactiveTintColor: '#fff',
                    style: { backgroundColor: '#000000' },
                    indicatorStyle: { backgroundColor: '#fff' }
                }}
            >
                <Tab.Screen name="Chat" component={newStackNav} />
                <Tab.Screen name="Contacts" component={ContactsScreen} />

            </Tab.Navigator>

        );
    }
}
