import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './dashboard';
import Login from './login';
import SplashScreen from './splashScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
      <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
