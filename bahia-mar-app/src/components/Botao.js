import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default function Botao(props) {

    const buttonStyles = {
        ...styles.Botao,
        backgroundColor: props.backgroundColor,
      };

    return(
        <TouchableHighlight style={buttonStyles}>
                <Text style={styles.Texto}>{props.texto}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    Botao: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8
      
      
    },
    Texto: {
        fontSize: 24,
        fontWeight: '400',
    }
  });