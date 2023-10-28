import { BACKEND_ROUTE } from "@env";

import Botao from "../components/Botao";
import Input from "../components/Input";

import background from "../images/background.png";
import logo from "../images/logo.png";

import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import { handleErrorBackend, login, logout } from "../services/API.js";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aguardandoAsync, setAguardandoAsync] = useState(false);
  const [token, setToken] = useState(null);

  function changeSenha(senha = "") {
    const senhaRegex = /^[a-zA-Z0-9!@#$&]+$/;
    if (senha === "" || senhaRegex.test(senha)) setSenha(senha);
  }

  function logar() {
    if (aguardandoAsync) return;

    setAguardandoAsync(true);
    fetch(`${BACKEND_ROUTE}/app/login/?email=${email}&password=${senha}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          handleErrorBackend(navigation.navigate, res.error);
        } else {
          // deu bom, proseguir...
          login(res.token).then(() => navigation.navigate("FazerPedido"));
        }
      })
      .catch((err) => {
        // mostrar mensagem de erro...
        console.log(err);
      })
      .finally(() => setAguardandoAsync(false));
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      logout().then(() => setToken(""));
      //testarLogin(navigation.navigate, false);
    });
    navigation.addListener("blur", () => {
      setEmail("");
      setSenha("");
    });
  }, []);

  if (token === null) return <></>;

  return (
    <PaperProvider>
      <ImageBackground
        style={styles.entirePage}
        source={background}
        resizeMode="stretch"
      >
        <View
          style={{ flex: 10, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ width: largura, alignItems: "center" }}>
            <Image source={logo}></Image>
          </View>
          <Input
            label="Email"
            value={email}
            setValue={(texto) => setEmail(texto.trim())}
            keyboardType="email-address"
          ></Input>
          <Input
            label="Senha"
            value={senha}
            setValue={changeSenha}
            secureTextEntry={true}
            maxLength={15}
          ></Input>
          <Botao
            disabled={aguardandoAsync}
            texto="Entrar"
            tipo="destaque"
            onPress={logar}
          />
          <Text
            disabled={aguardandoAsync}
            onPress={() => navigation.navigate("CadastroInfosCliente")}
            style={{ marginTop: 10 }}
          >
            Não tem cadastro? Cadastre-se agora
          </Text>
          <Text
            disabled={aguardandoAsync}
            onPress={() => navigation.navigate("RedefinirSenhaEmail")}
            style={{ marginTop: 10 }}
          >
            Esqueceu a senha? Clique aqui para recuperá-la
          </Text>
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
