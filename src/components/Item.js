import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { IconButton } from "react-native-paper";

import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const largura = Dimensions.get("screen").width;

export default function Botao(props) {
  const [cont, setCont] = useState(0);

  const { preco, title, image } = props;
  let resultado = cont * preco;

  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
        <Text style={styles.Text}>Total do Produto:</Text>
        <Text style={styles.Text}>R${resultado}</Text>
        <Image source={props.image} style={styles.Image} />
        <Text style={styles.Text}>{title}</Text>
        <Text style={styles.Text}>Preço: R${preco}</Text>
      </View>
      <View style={styles.Quantidade}>
        <IconButton
          icon={() => <MaterialCommunityIcons name="minus" size={24} />}
          onPress={() => {
            cont > 0 ? setCont(cont - 1) : "";
          }}
        />
        <Text style={styles.Text}>{cont}</Text>
        <IconButton
          icon={() => <MaterialCommunityIcons name="plus" size={24} />}
          onPress={() => {
            setCont(cont + 1);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: largura * 0.4,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5, // Adiciona sombra no Android
    shadowColor: "black", // Cor da sombra no iOS
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra no iOS
    shadowOpacity: 0.6, // Opacidade da sombra no iOS
    shadowRadius: 3, // Raio da sombra no iOS
  },
  ImageContainer: {
    padding: 10,
  },
  Quantidade: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    width: "100%",
    borderRadius: 10,
  },
  Image: {
    width: 115,
    height: 200,
  },
  Text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
