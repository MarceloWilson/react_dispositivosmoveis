import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';
import MegaSenaScreen from './screens/MegaSenaScreen';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Gerador de Jogos</Text>
      <JogoDoBichoScreen />
      <MegaSenaScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
