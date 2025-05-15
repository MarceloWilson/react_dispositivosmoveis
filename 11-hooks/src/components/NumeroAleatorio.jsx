import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Button, Text } from 'react-native-paper';
import { useState } from 'react';

export default function NumeroAleatorio() {

    const [numero, setNumero] = useState(0)

    function gerarNumero() {
        setNumero(Math.floor(Math.random() * 100))
        console.log('Número gerado');
    }

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * 100);
        setNumero(novoNumero);
        console.log('Número gerado:', novoNumero);
    }
    


  return (
    <View>
        <Card>
            <Card.Content>
            <Card.Title title="Número Aleatório" subtitle="Número aleatório do usuário" />
            <Text variant='headlineSmall'>Status: {Math.floor(Math.random() * 100)}</Text>
    
            </Card.Content>
    
            <Card.Actions>
            
            <Button onPress={gerarNumero}>Gerar Número</Button>
            </Card.Actions>
        </Card>
    </View>
  )
}

