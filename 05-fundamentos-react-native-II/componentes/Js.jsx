import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Js() {
    //variaveis
    const nome = "Marcelo"
    const idade = 19

    function checarMaiorIdade() {
        if(idade >= 18){
            return "Maior de idade"
        }else{
            return "Menor de idade"
        }
    }

    function Alerta(){
        alert("Maior de iadade!")
    }

  return (
    <View style = {styles.container}>
      <Text style = {styles.texto}>Js</Text>
      <Text style = {styles.texto}>Nome: {nome}</Text>
      <Text style = {styles.texto}>Idade: {idade}</Text>
        <Text style = {styles.texto}>{checarMaiorIdade()}</Text>
        <Text style = {styles.btn} onPress={Alerta}>Clique aqui</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 20,
        margin: 30,
        borderRadius: 50,
        shadowColor: 'black',
    },

    texto:{
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center'
    },

    btn:{
        backgroundColor: 'purple',
        textAlign: 'center',
        padding: 15,
        margin: 20,
        borderRadius: 30,
        shadowColor: 'black',
        fontSize: 30,
        fontWeight: '900',
    }
})