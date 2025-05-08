import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import EscudosScreen from './Screens/EscudosScreen'
import JogadoresScreen from './Screens/JogadoresScreen'
import TitulosScreen from './Screens/TitulosScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#ccc',
      drawerActiveBackgroundColor: '#C8102E', // Vermelho Flamengo
      drawerLabelStyle: {
        fontSize: 16,
        marginLeft: -10,
      },
      drawerStyle: {
        backgroundColor: '#8B0000', // Vermelho escuro
        width: 240,
      },
      headerStyle: {
        backgroundColor: '#8B0000', // Cabeçalho também com vermelho escuro
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
      <Drawer.Screen
        name="EscudoScreen"
        component={EscudosScreen}
        options={{
          title: 'Escudos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="JogadoresScreen"
        component={JogadoresScreen}
        options={{
          title: 'Jogadores',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="TitulosScreen"
        component={TitulosScreen}
        options={{
          title: 'Títulos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
