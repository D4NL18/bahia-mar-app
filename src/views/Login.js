import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Mod from "../components/Mod";

import background from "../images/background.png";
import logo from '../images/logo.png';

import axios from "axios";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import { PaperProvider } from "react-native-paper";
import { handleErrorBackend, login, testarLogin } from "../services/API.js";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aguardandoAsync, setAguardandoAsync] = useState(false);

  function login(event) {
    //event.preventDefault();
    if (aguardandoAsync) return;

    setAguardandoAsync(true);
    fetch(
      `https://backend-bahia-mar.onrender.com/login/?email=${email}&password=${senha}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json()).then((res) => {
      if (res.error) {
        handleErrorBackend(navigation.navigate, res.error);
      } else {
        // deu bom, proseguir...
        login(res);
        navigation.navigate('FazerPedido');
      }
    }).catch((err) => {
      // mostrar mensagem de erro...
      console.log(err);
    }).finally(() => setAguardandoAsync(false));
  }

  return (

    <PaperProvider>
      <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
        <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: largura, alignItems: "center" }}>
            <Image source={logo} ></Image>
          </View>
          <Input label="Email" value={email} setValue={setEmail} secure={false}></Input>
          <Input label="Senha" value={senha} setValue={setSenha} secure={true}></Input>
          <Botao texto="Entrar" tipo="destaque" onPress={() => navigation.navigate('FazerPedido')} />
          <Text onPress={() => navigation.navigate('CadastroInfosCliente')} style={{ marginTop: 10 }}>Não tem cadastro? Cadastre-se agora</Text>
          <Text onPress={() => navigation.navigate('RedefinirSenhaEmail')} style={{ marginTop: 10 }}>Esqueceu a senha? Clique aqui para recuperá-la</Text>
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