import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function JogadoresScreen() {
  const jogadores = [
    {
      nome: "Gabriel Barbosa",
      numero: 9,
      posicao: "Atacante",
      idade: 27,
      imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
    },
    {
      nome: "Arrascaeta",
      numero: 14,
      posicao: "Meia",
      idade: 29,
      imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
    },
    {
      nome: "Everton Ribeiro",
      numero: 7,
      posicao: "Meia",
      idade: 33,
      imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
    },
    {
      nome: "Zico",
      numero: 10,
      posicao: "Meia",
      idade: 72,
      imagem: "https://static.wikia.nocookie.net/wikifla/images/1/13/Zico.jpg/revision/latest?cb=20170916233142&path-prefix=pt-br"
    },
    {
      nome: "Pedro",
      numero: 21,
      posicao: "Atacante",
      idade: 26,
      imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} style={styles.imagem} resizeMode="cover" />
            <Card.Content>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.info}>Número: {item.numero}</Text>
              <Text style={styles.info}>Posição: {item.posicao}</Text>
              <Text style={styles.info}>Idade: {item.idade} anos</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
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
