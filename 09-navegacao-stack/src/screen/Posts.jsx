import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Posts({navigation, route}) {
  return (
    <View>
      <Text>Posts</Text>





      <Button
      mode = 'contained' 
      onPress={() => navigation.navigate('Feed')} 
      >
        Ir para o feed
        </Button>

        
      <Button
      mode = 'contained'
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>
    </View>
    
    
  )
}

const styles = StyleSheet.create({})