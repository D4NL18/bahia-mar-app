import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";

import background from "../images/background.png";

import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

const altura = Dimensions.get("screen").height;

export default function App() {
  return (
      <ImageBackground
        style={styles.entirePage}
        source={background}
        resizeMode="stretch"
      >
        <View style={{ flex: 4, justifyContent: "flex-end" }}>
          <Titulo titulo="Menu" tipo="grande" />
          <Titulo titulo="Cadastro" tipo="pequeno" />
        </View>
        {/* <Input label="exemplo" /> */}
        <View
          style={{
            flex: 4,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Botao texto="Cliente cadastrado" />
          <Botao texto="Cliente sem cadastro" />
          <Botao texto="Sair" tipo="destaque" />
        </View>
        <View style={{ flex: 2 }}></View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  entirePage: {
    flex: 10,
    height: altura,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    backgroundImage: background,
  },
});
