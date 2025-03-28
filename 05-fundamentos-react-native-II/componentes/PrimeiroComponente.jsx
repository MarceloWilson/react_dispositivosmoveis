import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    
    <View style = {styles.container}>
      <Text style = {styles.texto}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        padding: 10,
        margin : 10,
        borderRadius: 10,
        shadowColor: 'black',

    },
    texto: {
        fontSize: 20,
        fontWeight: '600'
    }
    
})