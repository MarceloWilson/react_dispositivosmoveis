import { StyleSheet, Text, View, List, Image } from 'react-native'
import React from 'react'

export default function Serie(props) {

    const {nome, ano, diretor, temporadas, capa} = props
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Série</Text>
      <Text style = {styles.texto}>Nome:{nome}</Text>
      <Text style = {styles.texto}>Ano:{ano}</Text>
      <Text style = {styles.texto}>Diretor:{diretor}</Text>
      <Text style = {styles.texto}>Temporadas:{temporadas}</Text>
      <Image source={{uri: capa}} style={{width: 200, height: 200, borderRadius: 30}} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E', 
        borderWidth: 3,
        borderColor: '#FFD700', 
        borderRadius: 15,
        margin: 15,
        alignItems: 'center',
        padding: 15,
        width: '85%', 
        shadowColor: '#000',
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FF4500',
        marginBottom: 12,
        textTransform: 'uppercase',
        
    },

    texto: {
        fontSize: 16,
        fontWeight: '600',
        color: '#00CED1', 
        marginBottom: 8,
        textAlign: 'center',
        lineHeight: 22,
    },
});