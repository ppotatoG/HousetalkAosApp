import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen.tsx';
import HomeScreen from './src/screens/HomeScreen.tsx';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<StackParamList>();

type StackParamList = {
  Login: undefined;
  Home: undefined;
};

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
