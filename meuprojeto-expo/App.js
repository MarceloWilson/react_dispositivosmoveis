import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert } from 'react-native'; // Adicionando a importação do Alert

const BhIdoloDoMengao = () => {
  const mostrarAlerta = () => {
    Alert.alert('Gol do Bruno Henrique, no Fluminense');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        
        <Text style={styles.tituloPrincipal}>Curiosidades sobre Bruno Henrique</Text>

        <Text style={styles.info}>
          <Text style={styles.titulo}>1. Rei dos Clássicos:</Text> Apelido dado pela torcida por se destacar em jogos importantes nos seus filhos: Vasco, Fluminense e Botafogo.
        </Text>
        <Text style={styles.info}>
          <Text style={styles.titulo}>2. Mais de 200 jogos:</Text> Desde 2019, já jogou mais de 200 partidas pelo Flamengo.
        </Text>
        <Text style={styles.info}>
          <Text style={styles.titulo}>3. Renovou até 2026:</Text> Recusou ofertas do exterior para continuar no Flamengo.
        </Text>
        <Text style={styles.info}>
          <Text style={styles.titulo}>4. Superação:</Text> Teve uma lesão grave no joelho em 2022, mas voltou a jogar.
        </Text>
        <Text style={styles.info}>
          <Text style={styles.titulo}>5. Títulos:</Text> Conquistou vários troféus, incluindo Libertadores e Brasileirão. O Bh é maior que muitos times por aí..
        </Text>

        <Image
          source={{ uri: 'https://s2-oglobo.glbimg.com/mos-4q9_B4Ob3fZ4Uy6Slp5XQ20=/0x0:3521x2225/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/S/c/9GXjzGRU6mNXPzUaQGcQ/bruno-henrique-27.jpg' }}
          style={styles.imagem}
        />

        <Image
          source={{ uri: 'https://www.shutterstock.com/image-photo/stadium-bruno-henrique-celebrates-goal-600nw-2327968587.jpg' }}
          style={styles.imagem}
        />

        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkclehVnDrp08omJ0i9LupbPmoipTy3QKEQ&s' }}
          style={styles.imagem}
        />

        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJO2p92VOW6Cy9jUfxJEXTm9P-OelSDtD5A&s' }}
          style={styles.imagem}
        />

        <Image
          source={{ uri: 'https://ogimg.infoglobo.com.br/in/25219435-b71-04d/FT1086A/89119568_ES-Rio-de-Janeiro-RJ-07082020Ensaio-com-trofeus-futebol-profissional-FlamengoB.jpg' }}
          style={styles.imagem}
        />

        <Button
          title="Gol do Bruno Henrique"
          onPress={mostrarAlerta}
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d90429',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  titulo: {
    fontWeight: 'bold',
    color: '#ff4500',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 30,
  },
});

export default BhIdoloDoMengao;
