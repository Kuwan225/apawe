import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,SignUp,MenuLogin } from '../screens';

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='MenuLogin' component={MenuLogin}/>
    </Stack.Navigator>
  )
}

export default Router
