import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Signin from './components/Signin';
import Register from './components/Register';
import Mainscreen from './components/Mainscreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Mainscreen" component={Mainscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
