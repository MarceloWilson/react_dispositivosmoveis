import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import Js from './componentes/Js';
import atleta from './componentes/atleta';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />

        <PrimeiroComponente></PrimeiroComponente>
      
        <Js></Js>

        </ScrollView>
    </View>
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
