import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import { PaperProvider, Text, Button } from "react-native-paper";

export default function Receitascreen({ navigation, route }) {
  const receita = route.params.receita;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.titulo}>
        {receita.nome}
      </Text>

      <Image source={{ uri: receita.imagem }} style={styles.imagem} />

      <Text style={styles.info}>
        ⏱️ Tempo de Preparo: {receita.tempoPreparo}
      </Text>
      <Text style={styles.info}>🍽️ Porções: {receita.porcoes}</Text>

      <Text variant="titleMedium" style={styles.subtitulo}>
        🧂 Ingredientes:
      </Text>
      {receita.ingredientes.map((ingrediente, index) => (
        <Text key={index} style={styles.lista}>
          {ingrediente}
        </Text>
      ))}

      <Text variant="titleMedium" style={styles.subtitulo}>
        👨‍🍳 Modo de Preparo:
      </Text>
      {receita.modoPreparo.map((modo, index) => (
        <Text key={index} style={styles.lista}>
          {modo}
        </Text>
      ))}

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.botao}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  titulo: {
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
  },
  subtitulo: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  lista: {
    marginBottom: 4,
    paddingLeft: 8,
  },
  botao: {
    marginTop: 24,
    alignSelf: "center",
    width: "50%",
  },
});
