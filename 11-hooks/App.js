import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Nome from './src/components/Nome';
import Volume from './src/components/Volume';
import NumeroAleatorio from './src/components/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <Nome />

      <Text></Text>
      <Text></Text>

      <Volume />

      <Text></Text>
      <Text></Text>

      <NumeroAleatorio />
      <StatusBar style="auto" />
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
