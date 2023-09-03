import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-paper';

const largura = Dimensions.get("screen").width;

export default function Botao(props) {

    return(
      <Button
        mode = 'elevated'
        style = {props.tipo == "destaque" ?  styles.BotaoDestaque : styles.Botao}
        labelStyle = {props.tipo == "destaque" ? styles.TextoDestaque : styles.Texto}
        onPress={props.onPress}
        >
          {props.texto}
        </Button>
    );
}

const styles = StyleSheet.create({
    Botao: {
      marginTop: 10,
      borderRadius: 50,
      backgroundColor: '#86BBD8',
      paddingVertical: 10,
      width: largura * 0.8
    },
    BotaoDestaque: {
      marginTop: 10,
      borderRadius: 50,
      backgroundColor: '#33658A',
      paddingVertical: 6,
      paddingHorizontal: 20,
      // width: largura * 0.4
    },
    Texto: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 24,
      color: 'black'
    },
    TextoDestaque: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 32,
      color: 'white',
      height: 'auto',
    }
  });