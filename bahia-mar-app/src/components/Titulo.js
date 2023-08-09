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
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('screen').width,
      height: "auto",

    },
    Titulo: {
        fontSize: 64,
        fontWeight: '900'
    },
    Subtitulo: {
        fontSize: 32,
        fontWeight: '700',
    }
  });