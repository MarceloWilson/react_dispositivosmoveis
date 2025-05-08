import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
      mode = 'contained'
      onPress={() => { 
        navigation.openDrawer()
        setTimeout(() => {
            navigation.closeDrawer()
        }, 300)
        
      }}
      >
        Abre e Fecha

      </Button>

      <Button
      mode ='contained'
      onPress ={() =>navigation.openDrawer() }>
        Abre o drawer
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})