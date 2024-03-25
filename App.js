import React from 'react'
import LandingPage from "./components/landingPage"
import HomePage from './components/homePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
