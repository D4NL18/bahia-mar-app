import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
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
  const itens = {
    item1: {
      title: "Galao 20L",
      image: Teste,
      preco: 200,
    },
    item2: {
      title: "Galao 10L",
      image: Teste,
      preco: 100,
    },
    item3: {
      title: "Galao 20L",
      image: Teste,
      preco: 20,
    },
    item4: {
      title: "Galao 10L",
      image: Teste,
      preco: 30,
    },
    item5: {
      title: "Galao 20L",
      image: Teste,
      preco: 40,
    },
    item6: {
      title: "Galao 10L",
      image: Teste,
      preco: 50,
    },
  };

  // Agrupe os itens em pares
  const groupedItems = Object.values(itens).reduce(
    (acc, item, index, array) => {
      if (index % 2 === 0) {
        acc.push(array.slice(index, index + 2));
      }
      return acc;
    },
    []
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
            <Titulo titulo="Fazer Pedido" tipo="medio" />
            <Titulo titulo="Escolher Itens" tipo="pequeno" />
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            style={styles.scrollView}
          >
            {groupedItems.map((group, groupIndex) => (
              <View style={styles.itemGroup} key={groupIndex}>
                {group.map((item, itemIndex) => (
                  <Item
                    key={itemIndex}
                    title={item.title}
                    image={item.image}
                    preco={item.preco}
                  />
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.botao}>
          <Botao tipo="destaque" texto="Finalizar Compra" />
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
});
