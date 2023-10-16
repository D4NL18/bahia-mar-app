import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import Titulo from "../components/Titulo";
import Item from "../components/Item";
import Botao from "../components/Botao";

import background from "../images/background.png";
import Teste from "../images/teste.png";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {
  const items = [
    {
      nome: "First Item",
      quantidade: "10",
      valor: "R$2000,00",
    },
    {
      nome: "Second Item",
      quantidade: "20",
      valor: "R$3000,00",
    },
    {
      nome: "Third Item",
      quantidade: "30",
      valor: "R$4000,00",
    },
    {
      nome: "First Item",
      quantidade: "10",
      valor: "R$2000,00",
    },
    {
      nome: "Second Item",
      quantidade: "20",
      valor: "R$3000,00",
    },
    {
      nome: "Third Item",
      quantidade: "30",
      valor: "R$4000,00",
    },
    {
      nome: "First Item",
      quantidade: "10",
      valor: "R$2000,00",
    },
    {
      nome: "Second Item",
      quantidade: "20",
      valor: "R$3000,00",
    },
    {
      nome: "Third Item",
      quantidade: "30",
      valor: "R$4000,00",
    },
    {
      nome: "First Item",
      quantidade: "10",
      valor: "R$2000,00",
    },
    {
      nome: "Second Item",
      quantidade: "20",
      valor: "R$3000,00",
    },
    {
      nome: "Third Item",
      quantidade: "30",
      valor: "R$4000,00",
    },
    {
      nome: "First Item",
      quantidade: "10",
      valor: "R$2000,00",
    },
    {
      nome: "Second Item",
      quantidade: "20",
      valor: "R$3000,00",
    },
    {
      nome: "Third Item",
      quantidade: "30",
      valor: "R$4000,00",
    },
    {
      nome: "First Item",
      quantidade: "10",
      valor: "R$2000,00",
    },
    {
      nome: "Second Item",
      quantidade: "20",
      valor: "R$3000,00",
    },
    {
      nome: "Third Item",
      quantidade: "30",
      valor: "R$4000,00",
    },
  ];

  const Coluna = (props) => (
    <View style={styles.coluna}>
      <Text style={styles.infos}>{props.title}:</Text>
      {items.map((item, index) => (
        <View key={index}>
          <Text style={styles.infos}>
            {props.title == "Nome"
              ? item.nome
              : props.title == "Quantidade"
              ? item.quantidade
              : item.valor}{" "}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <PaperProvider>
      <ImageBackground
        style={styles.entirePage}
        source={background}
        resizeMode="stretch"
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Titulo titulo="Confirmar Pedido" tipo="medio" />
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            style={styles.scrollView}
          >
            <View style={styles.containerColuna}>
              <Coluna title="Nome"/>
              <Coluna title="Quantidade"/>
              <Coluna title="Valor"/>
            </View>
          </ScrollView>
        </View>
        <View style={styles.botao}>
          <Botao
            tipo="destaque"
            texto="Finalizar Compra"
            onPress={() => {
              navigation.navigate("Menu");
            }}
          />
        </View>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  entirePage: {
    flex: 1,
    height: altura,
    width: largura,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    flex: 0.3, // Ocupa a parte superior da tela
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    // backgroundColor: 'red'
  },
  scrollViewContent: {
    flexGrow: 1,
    // backgroundColor: 'blue'
  },
  scrollView: {
    flex: 1, // Ocupa a parte restante da tela
    width: "100%", // Ocupa toda a largura da tela
  },
  itemGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 15,
    width: "100%", // Ocupa toda a largura da tela
  },
  botao: {
    marginTop: 20,
    marginBottom: 50,
  },
  infos: {
    fontSize: 16,
    fontWeight: "500",
    margin: 8,
  },

  containerColuna: {
    display: "flex",
    flexDirection: "row",
    width: largura*0.9,
    justifyContent: "space-between",

  },
  coluna: {
    display: "flex",
    alignItems: "center",
    width: (largura*0.9)/3,
    borderWidth: 1,
  }
});
