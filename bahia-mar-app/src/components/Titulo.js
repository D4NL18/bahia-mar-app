import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function Titulo(props) {

    return(
        <View style={styles.View}>
            <Text style={props.tipo == "titulo" ? styles.Titulo : styles.Subtitulo}>{props.titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    View: {
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('screen').width,
      height: "auto",

    },
    Titulo: {
        fontSize: 96,
        lineHeight: 96,
        fontWeight: '900'
    },
    Subtitulo: {
        fontSize: 32,
        lineHeight: 32,
        fontWeight: '700',
    }
  });