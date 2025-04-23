import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import Home from '../screen/Home'
import Feed from '../screen/Feed'
import Posts from '../screen/Posts'

const Stack = createStackNavigator()
export default function StackRoutes() {
  return (
   <Stack.Navigator>

    <Stack.Screen name = 'Home' component ={Home} />
    <Stack.Screen name = 'Feed' component ={Feed} />
    <Stack.Screen name = 'Posts' component ={Posts} />
    
   </Stack.Navigator>
  )
}

