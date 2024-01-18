import { BACKEND_ROUTE } from "@env";

import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";

import background from "../images/background.png";

import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import { handleErrorBackend, logout } from "../services/API";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

const camposPadrao = {
  email: "",
  nome: "",
  telefone: "",
  cep: "",
  rua: "",
  numero: "",
  bairro: "",
  referencia: "",
  senha: "",
};

export default function App({ navigation }) {
  const [aguardandoAsync, setAguardandoAsync] = useState(false);
  const [campos, setCampos] = useState(camposPadrao);
  const [token, setToken] = useState(null);

  function changeSenha(texto = "") {
    const senhaRegex = /^[a-zA-Z0-9!@#$&]+$/;
    if (texto === "" || senhaRegex.test(texto))
      setCampos({ ...campos, senha: texto });
  }
  function changeTelefone(texto = "") {
    const telefoneRegex = /^\d{0,7}-?\d{0,4}$/;
    if (texto === "" || telefoneRegex.test(texto))
      setCampos({ ...campos, telefone: texto });
  }
  function changeCep(texto = "") {
    const cepRegex = /^\d{0,5}-?\d{0,3}$/;
    if (texto === "" || cepRegex.test(texto))
      setCampos({ ...campos, cep: texto });
  }
  function changeNumero(texto) {
    const numeroRegex = /^\d{0,5}$/;
    if (texto === "" || numeroRegex.test(texto))
      setCampos({ ...campos, numero: texto });
  }

  function cadastrar() {
    if (aguardandoAsync) return;

    setAguardandoAsync(true);
    const route_handler = BACKEND_ROUTE;
    fetch(`${route_handler}/app/cadastrar_usuario`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: campos.email,
        password: campos.senha,
        name: campos.nome.trim(),
        phone: campos.telefone,
        cep: campos.cep,
        street: campos.rua.trim(),
        houseNumber: campos.numero,
        neighborhood: campos.bairro.trim(),
        referencePoint: campos.referencia.trim(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          handleErrorBackend(navigation.navigate, res.error);
        } else {
          // deu bom, proseguir...
          alert("Cadastro concluído");
          navigation.navigate("Login");
        }
      })
      .catch((err) => {
        // mostrar mensagem de erro...
        console.error(err);
      })
      .finally(() => setAguardandoAsync(false));
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      logout();
      setToken("");
      //testarLogin(navigation.navigate, false);
    });
    navigation.addListener("blur", () => {
      setCampos(camposPadrao);
    });
  });

  if (token === null) return <></>;

  return (
    <PaperProvider>
      <ImageBackground
        style={styles.entirePage}
        source={background}
        resizeMode="stretch"
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.titulo}>
            <Titulo titulo="Cadastro" tipo="medio" />
          </View>
          <ScrollView style={styles.scrollview}>
            <Input
              label="Email"
              value={campos.email}
              setValue={(texto) =>
                setCampos({ ...campos, email: texto.trim() })
              }
              keyboardType="email-address"
              maxLength={50}
            ></Input>
            <Input
              label="Senha"
              value={campos.senha}
              setValue={changeSenha}
              secureTextEntry={true}
              maxLength={15}
            ></Input>
            <Input
              label="Nome"
              value={campos.nome}
              setValue={(texto) =>
                setCampos({ ...campos, nome: texto.trimStart() })
              }
              maxLength={50}
            ></Input>
            <Input
              label="Telefone"
              value={campos.telefone}
              setValue={changeTelefone}
              keyboardType="numeric"
              maxLength={12}
            ></Input>
            <Input
              label="CEP"
              value={campos.cep}
              setValue={changeCep}
              keyboardType="numeric"
              maxLength={9}
            ></Input>
            <Input
              label="Rua"
              value={campos.rua}
              setValue={(texto) =>
                setCampos({ ...campos, rua: texto.trimStart() })
              }
              maxLength={50}
            ></Input>
            <Input
              label="Número"
              value={campos.numero}
              setValue={changeNumero}
              keyboardType="numeric"
              maxLength={5}
            ></Input>
            <Input
              label="Bairro"
              value={campos.bairro}
              setValue={(texto) =>
                setCampos({ ...campos, bairro: texto.trimStart() })
              }
              maxLength={50}
            ></Input>
            <Input
              label="Referência"
              value={campos.referencia}
              setValue={(texto) =>
                setCampos({ ...campos, referencia: texto.trimStart() })
              }
              maxLength={50}
            ></Input>
          </ScrollView>
          <Botao
            disabled={aguardandoAsync}
            texto="Concluir"
            tipo="destaque"
            onPress={cadastrar}
          />
        </SafeAreaView>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  entirePage: {
    height: altura,
    width: largura,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: background,
  },
  container: {
    flex: 1,
    paddingVertical: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    flex: 0.1,
    // backgroundColor: "red"
  },
  scrollview: {
    flex: 0.6,
  },
  botao: {
    flex: 0.2,
  },
});
