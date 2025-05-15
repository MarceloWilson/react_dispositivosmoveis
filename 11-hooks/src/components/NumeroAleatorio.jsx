import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Card, Button, Text } from 'react-native-paper';

export default function NumeroAleatorio() {
  const [numero, setNumero] = useState(0);
  const [listaNumeros, setListaNumeros] = useState([]);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumero(novoNumero);
    console.log('Número gerado:', novoNumero);
  }

  function adicionarNumero() {
    setListaNumeros([...listaNumeros, numero]);
  }

  function limparLista() {
    setListaNumeros([]);
  }

  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Title title="Número Aleatório" subtitle="Gere e gerencie seus números" />
        <Card.Content>
          <Text variant="headlineSmall">Número Atual: {numero}</Text>
          <Text style={{ marginTop: 8 }} variant="bodyMedium">
            Lista de Números: {listaNumeros.length > 0 ? listaNumeros.join(', ') : 'Nenhum número adicionado'}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerarNumero}>Gerar Número</Button>
          <Button onPress={adicionarNumero}>Adicionar à Lista</Button>
          <Button onPress={limparLista}>Limpar Lista</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
