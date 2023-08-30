import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Titulo(props) {
  return (
    <View style={styles.View}>
      {/* <Text style = {props.tipo == "tituloGrande" ? styles.TituloGrande : styles.TituloMedio}>{props.tituloMedio}</Text> */}
      <Text
        style={
          props.tipo === "grande"
            ? styles.TituloGrande
            : props.tipo === "medio"
            ? styles.TituloMedio
            : styles.TituloPequeno
        }
      >
        {props.titulo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: "auto",
  },
  TituloGrande: {
    fontSize: 96,
    lineHeight: 96,
    fontWeight: "900",
  },
  TituloMedio: {
    fontSize: 42,
    lineHeight: 42,
    fontWeight: "900",
  },
  TituloPequeno: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "700",
  },
});
