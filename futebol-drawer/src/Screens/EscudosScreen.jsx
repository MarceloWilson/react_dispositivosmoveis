import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function EscudosScreen() {
  const times = [
    {
      nome: "Flamengo",
      escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
      fundacao: "15 de novembro de 1895",
      estadio: "Maracanã",
      mascote: "Urubu",
      cores: ["Vermelho", "Preto"]
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={times}   
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.escudo }} />
            <Card.Content>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.texto}>Fundação: {item.fundacao}</Text>
              <Text style={styles.texto}>Estádio: {item.estadio}</Text>
              <Text style={styles.texto}>Mascote: {item.mascote}</Text>
              <Text style={styles.texto}>Cores: {item.cores.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 10,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#b30000',
    elevation: 5,
  },
  imagem: {
    height: 300,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color: '#fff',
  },
  info: {
    fontSize: 14,
    color: '#f5f5f5',
    marginBottom: 2,
  },
});

