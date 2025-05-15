import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Button } from 'react-native-paper';
import { useState } from 'react';


export default function nome() {

  const [nome, setNome] = useState('Olá')




function esconderNome() {
  setNome ('Negado');
  console.log('Nome escondido');
}

function revelarNome() {
  
  setNome ('Aprovado');
  console.log('Nome revelado');
}

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Nome" subtitle="Nome do usuário" />
          <Text variant='headlineSmall'>Status: {nome}</Text>

        </Card.Content>

        <Card.Actions>
          <Button onPress={esconderNome}>Reprovar</Button>
          <Button onPress={revelarNome}>Aprovar

          </Button>

        </Card.Actions>
      </Card>
    </View>
  )
}

