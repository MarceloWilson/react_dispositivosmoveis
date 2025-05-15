import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Button } from 'react-native-paper';
import { useState } from 'react';

export default function Volume() {
    const [volume, setVolume] = useState(0)

    function aumentarVolume() {
        setVolume(volume + 1)
        if (volume >= 10) {
            setVolume(10);
            console.log('Volume já está no máximo');
            return;
        }
        console.log('Volume aumentado');
    }

    function diminuirVolume() {
        setVolume(volume - 1)
        if (volume <= 0) {
            setVolume(0);
            console.log('Volume já está no mínimo');
            return;
        }
        console.log('Volume diminuído');
    }
    

  return (
    <View>
        <Card>
            <Card.Content>
            <Card.Title title="Volume" subtitle="Volume do usuário" />
            <Text variant='headlineSmall'>Status: {volume}</Text>
    
            </Card.Content>
    
            <Card.Actions>
            <Button onPress={diminuirVolume}>Diminuir</Button>
            <Button onPress={aumentarVolume}>Aumentar</Button>
 

    
            </Card.Actions>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({})