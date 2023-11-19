import { BACKEND_ROUTE } from "@env";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import Titulo from "../components/Titulo";
import Item from "../components/Item";
import Botao from "../components/Botao";

import background from "../images/background.png";
import Teste from "../images/teste.png";
import {
  TOKEN_KEY,
  getTokenSessao,
  handleErrorBackend,
  testarLogin,
} from "../services/API.js";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {
  const [product, setProduct] = useState(undefined);
  const [aguardandoAsync, setAguardandoAsync] = useState(false);

  function fetch_products(event) {
    if (aguardandoAsync) return;

    setAguardandoAsync(true);
    const route_handler = BACKEND_ROUTE;
    fetch(
      `${route_handler}/produtos/obter/${getTokenSessao()}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          handleErrorBackend(navigation.navigate, res.error);
        } else {
          // deu bom, proseguir...
          // console.log(res);
          setProduct(res.map((value)=>({...value, COUNT: 0})));
        }
      })
      .catch((err) => {
        // mostrar mensagem de erro...
        console.log(err);
      })
      .finally(() => setAguardandoAsync(false));
  }

  useEffect(() => {
    navigation.addListener("focus", async () => {
      testarLogin(navigation.navigate);
    });
    /*navigation.addListener("blur", () => {

    });*/
  }, []);

  if (!product) {
    fetch_products();
    return <></>;
  }

  // Agrupe os itens em pares
  const groupedItems = Object.values(product).reduce(
    (acc, item, index, array) => {
      if (index % 2 === 0) {
        acc.push(array.slice(index, index + 2));
      }
      return acc;
    },
    []
  );
  // console.log(product)
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
                    item={item}
                  />
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.botao}>
          <Botao
            tipo="destaque"
            texto="Finalizar Compra"
            onPress={() => {
              navigation.navigate("ConfirmarPedido", {jsonData: product});
              // console.log(product);
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
});
