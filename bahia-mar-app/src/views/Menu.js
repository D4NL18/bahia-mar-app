import Titulo from '../components/Titulo'
import Botao from '../components/Botao'

import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const altura = Dimensions.get('screen').height;

export default function App() {
  return (
    <View style = {styles.entirePage}>
      <View style = {{flex: 4, justifyContent: 'flex-end'}}>
        <Titulo titulo = "Menu" tipo = "titulo" />
        <Titulo titulo = "Cadastro" tipo = "subtitulo" />
      </View>
      <View style = {{flex: 4, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Botao texto = "Cliente cadastrado" />
        <Botao texto = "Cliente sem cadastro" />
        <Botao texto = "Sair" tipo = 'destaque' />
      </View>
      <View style = {{flex: 2}}></View>
      <StatusBar style = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  entirePage: {
    flex: 10,
    height: altura,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
