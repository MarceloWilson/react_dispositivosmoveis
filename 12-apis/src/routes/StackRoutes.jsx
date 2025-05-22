import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import UsuarioScreen from '../screens/UsuarioScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

        <Stack.Screen
        
        name="HomeScreen"
        component={HomeScreen}
        options={{
            title: 'Lista de Usuários',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}
        />

<Stack.Screen
        
        name="UsuarioScreen"
        component={UsuarioScreen}
        options={{
            title: 'Usuario',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}
        />

        
           
       


    </Stack.Navigator>
  )
}


