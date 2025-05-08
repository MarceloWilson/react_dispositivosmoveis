
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ConfigScreen from '../screens/ConfigScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UserScreen from '../screens/UserScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name ='HomeScreen' 
        component={HomeScreen}
        options={{
        title: "Inicio",
        drawerIcon: ({color, size}) => <Ionicons name= 'home' color={color} size ={size}></Ionicons>}}
        />

        <Drawer.Screen name ='ProfileScreen'
        component={ProfileScreen}
        options = {{
            title: "Perfil",
            drawerIcon: ({color, size}) => <Ionicons name= 'person-sharp' color={color} size ={size}></Ionicons>}}
            />
      
       
        <Drawer.Screen name ='ConfigScreen'
        component={ConfigScreen}
        options = {{
            title: "Configuração",
            drawerIcon: ({color, size}) => <Ionicons name= 'chevron-forward-circle' color={color} size ={size}></Ionicons>}}
    
        />
        <Drawer.Screen name ='UserScreen' component={UserScreen}/>
    

    </Drawer.Navigator>
  )
}

