import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import EmailLoginScree from '../screens/EmailLoginScree';
import JoinScreen from '../screens/JoinScreen';

const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EmailLogin" component={EmailLoginScree} />
      <Stack.Screen name="Join" component={JoinScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
