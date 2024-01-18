import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Mod from "../components/Mod";

import background from "../images/background.png";

import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { PaperProvider } from "react-native-paper";

const altura = Dimensions.get("screen").height;

export default function App({ navigation }) {

  return (
    <PaperProvider>
      <ImageBackground
        style={styles.entirePage}
        source={background}
        resizeMode="stretch"
      >
        <View style={{ flex: 4, justifyContent: "flex-end" }}>
          <Titulo titulo="Menu" tipo="grande" />
          <Titulo titulo="Cadastro" tipo="pequeno" />
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Botao texto="Cliente cadastrado"
            onPress={() => navigation.navigate('CadastrarVendaCadastrado')}
          />
          <Botao texto="Cliente sem cadastro"
            onPress={() => navigation.navigate('CadastrarVendaSemCadastro')}
          />
          <Botao texto="Sair"
            tipo="destaque"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={{ flex: 2 }}></View>
      </ImageBackground>
    </PaperProvider>
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


// const [visible, setVisible] = useState("");
// const showModal = () => setVisible(true);
// const hideModal = () => setVisible(false);