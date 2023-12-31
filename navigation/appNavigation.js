import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import ProfileScreen from '../screens/AppScreens/ProfileScreen'
import TimerScreen from '../screens/AppScreens/TimerScreen'
import { LogBox, Text, View } from 'react-native';
import {HomeIcon} from 'react-native-heroicons/solid'
import {UserIcon} from 'react-native-heroicons/solid'
import {HeartIcon} from 'react-native-heroicons/solid'
import {ClockIcon} from 'react-native-heroicons/solid'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyBookScreen from '../screens/AppScreens/MyBookcreen/MyBookScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen'
import {SignupScreen} from '../screens/LoginScreen/SignupScreen'

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
      <Tab.Navigator
        
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
                if ( route.name === 'Home'){
                  return <HomeIcon size ={size} color ={focused? 'coral' : 'gray'}/>
                }
                if ( route.name === 'Profile'){
                  return <UserIcon size ={size} color ={focused? 'coral' : 'gray'}/>
                }
                if ( route.name === 'Timer'){
                  return <ClockIcon size ={size} color ={focused? 'coral' : 'gray'}/>
                }
                if ( route.name === 'My Books'){
                  return <HeartIcon size ={size} color ={focused? 'coral' : 'gray'}/>
                }
          },
        })}
      >
        <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Tab.Screen name="Timer" options={{headerShown: false}} component={TimerScreen} />
        <Tab.Screen name="My Books" options={{headerShown: false}} component={MyBookScreen} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />

      </Tab.Navigator>
     
    </NavigationContainer>
    
  )
 
  
}
