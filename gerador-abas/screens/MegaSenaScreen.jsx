import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Text, Card, Button } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState('');
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogo() {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }

    const jogo = numeros.sort((a, b) => a - b).join(', ');
    setJogoGerado(jogo);
    setJogosMegaSena([...jogosMegaSena, jogo]);
  }

  function limparLista() {
    setJogosMegaSena([]);
    setJogoGerado('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Gerador de Jogos Mega-Sena</Text>

      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo
      </Button>

      {jogoGerado ? (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.subtitulo}>Último Jogo Gerado:</Text>
            <Text style={styles.numeros}>{jogoGerado}</Text>
          </Card.Content>
        </Card>
      ) : null}

      {jogosMegaSena.length > 0 && (
        <>
          <Text style={styles.listaTitulo}>Jogos Salvos:</Text>
          {jogosMegaSena.map((jogo, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <Text style={styles.numeros}>{jogo}</Text>
              </Card.Content>
            </Card>
          ))}
          <Button onPress={limparLista} style={{ marginTop: 10 }} mode="outlined">
            Limpar Lista
          </Button>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  numeros: {
    fontSize: 18
  },
  card: {
    marginTop: 16
  },
  listaTitulo: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold'
  }
});
