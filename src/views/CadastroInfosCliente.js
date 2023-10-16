import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Mod from "../components/Mod";

import background from "../images/background.png";
import logo from '../images/logo.png';


import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import { PaperProvider } from "react-native-paper";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {

  return (

    <PaperProvider>
      <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
        <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: largura, alignItems: "center" }}>
          <Titulo titulo="Cadastro" tipo="medio" />
          </View>
          <Input label="Nome"></Input>
          <Input label="Telefone"></Input>
          <Botao texto="Seguir" tipo="destaque" onPress={() => navigation.navigate('CadastroEnderecoCliente')} />
        </View>
      </ImageBackground>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  entirePage: {
    flex: 10,
    height: altura,
    width: largura,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: background,
  },
});