import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Filme from './componentes/filme';
import Serie from './componentes/serie';


export default function App() {

  const listaFilmes = [
    {
      nome: "Transformers",
      ano: "2007",
      diretor: "Michael Bay",
      tipo: "Ação, Ficção Científica",
      capa: "https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg",
    },
    {
      nome: "Interstellar",
      ano: "2014",
      diretor: "Christopher Nolan",
      tipo: "Ficção Científica, Drama",
      capa: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    },
    {
      nome: "Inception",
      ano: "2010",
      diretor: "Christopher Nolan",
      tipo: "Ação, Ficção Científica",
      capa: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
    },
  ];

    const listaSeries = [
      {
        nome: "The Office",
        ano: "2005–2013",
        diretor: "Greg Daniels",
        tipo: "Comédia",
        capa: "https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg",
      },
      {
        nome: "Breaking Bad",
        ano: "2008–2013",
        diretor: "Vince Gilligan",
        tipo: "Crime, Drama",
        capa: "https://i.ytimg.com/vi/O1gFxMoBAVw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA0wrPQK0a1Q2zFWWz_N2woRjT6Tg",
      },
      {
        nome: "Stranger Things",
        ano: "2016–presente",
        diretor: "Irmãos Duffer",
        tipo: "Ficção Científica, Suspense",
        capa: "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
      },
    ];

  return (
    <ScrollView>
    <View style={styles.container}>
     
    {
  listaFilmes.map(
    Filmes => {
      return <Filme 
        nome={Filmes.nome}
        ano={Filmes.ano}
        diretor={Filmes.diretor}
        tipo={Filmes.tipo}
        capa={Filmes.capa}/>
    })
}

{
  listaSeries.map(
    Series => {
      return <Serie 
        nome={Series.nome}
        ano={Series.ano}
        diretor={Series.diretor}
        temporadas={Series.temporadas}
        capa={Series.capa}
        />
    })
}

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
