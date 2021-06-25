import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="UsersList" 
        component={UsersList} 
        options={{title:'Users List'}}/>  
      <Stack.Screen 
      name="CreateUserScreen" 
      component={CreateUserScreen} 
      options={{title:'Create a New User'}}/>          
      <Stack.Screen 
      name="UserDetailsScreen"
      component={UserDetailsScreen} 
      options={{title:'User Details'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
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
});
