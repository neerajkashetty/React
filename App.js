// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView , StackScreen} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './Screens/Lists';
import LoginScreen from './Screens/LoginScreen';
import CounterScreen from './Screens/SettingsScreen';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import TouchID from 'react-native-touch-id';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack= createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Dashboard" component={ListScreen} />
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Settings" component={CounterScreen}/>
    </Tab.Navigator>
  );
}


function sta(){
  return(
    <Stack.Navigator > 
      <Stack.Screen name=" " component={LoginScreen}>
      </Stack.Screen>
    </Stack.Navigator>
  );
}

  function App() {
    
    return (
      <NavigationContainer  >
        <Drawer.Navigator initialRouteName = "Login" title = "logHome" >
          <Drawer.Screen name="Home"  component={HomeScreen} />
          <Drawer.Screen name="Lists" component={MyTabs}/>
          <Drawer.Screen name="Settings" component={CounterScreen}/>
          <Drawer.Screen name="Login"  component={sta}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  

export default App;