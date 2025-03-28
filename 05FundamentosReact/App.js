import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil
        nome="Matheus"
        idade={18}
        escolaridade="Superior"
      >
        <Perfil
          nome="Vinicius"
          idade={19}
          escolaridade="Superior"
        ></Perfil>

        <Perfil
          nome="Marcelo"
          idade={19}
          escolaridade="Superior"
        ></Perfil>
      </Perfil>
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