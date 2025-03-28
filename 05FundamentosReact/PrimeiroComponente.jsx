import React from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';

//Função do componente 
export default function PrimeiroComponente() {
    return (
        <ScrollView>
            <View>
                <Text>Primeiro Componente</Text>
                <Button title="Clique aqui" onPress={() => alert('Clicou')} />
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
                    style={{ width: 50, height: 50 }} 
                />
            </View>
        </ScrollView>
    );
}
