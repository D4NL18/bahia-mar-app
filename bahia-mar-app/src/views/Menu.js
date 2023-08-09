import Titulo from '../components/Titulo'
import Botao from '../components/Botao'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.entirePage}>
      <Titulo titulo="Menu" tipo="titulo" />
      <Titulo titulo="Cadastro" tipo="subtitulo" />
      <Botao texto="Cliente cadastrado" backgroundColor="#0000FF" />
      <Botao texto="Cliente sem cadastro" />
      <Botao texto="sair" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  entirePage: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
