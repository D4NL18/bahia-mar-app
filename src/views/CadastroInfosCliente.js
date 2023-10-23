import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Mod from "../components/Mod";

import background from "../images/background.png";
import logo from '../images/logo.png';

import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView
} from "react-native";
import { PaperProvider } from "react-native-paper";
import axios from "axios";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [referencia, setReferencia] = useState("");

  function cadastrar() {
    if (aguardandoAsync) return;


    setAguardandoAsync(true);
    fetch(
      `https://backend-bahia-mar.onrender.com/clientes/inserir/`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          nome: nome,
          telefone: telefone,
          cep: cep,
          rua: rua,
          numero: numero,
          bairro: bairro,
          referencia: referencia
        }
      }
    ).then((res) => res.json()).then((res) => {
      if (res.error) {
        handleErrorBackend(navigation.navigate, res.error);
      } else {
        // deu bom, proseguir...
        navigation.navigate('Login');
      }
    }).catch((err) => {
      // mostrar mensagem de erro...
      console.log(err);
    }).finally(() => setAguardandoAsync(false));
  }

  return (


    <PaperProvider>
      <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
        <View style={styles.container}>
          <View style={styles.titulo}>
            <Titulo titulo="Cadastro" tipo="medio" />
          </View>
          <ScrollView style={styles.scrollview}>
            <Input label="Nome" value={nome} setValue={setNome} secure={false}></Input>
            <Input label="Telefone" value={telefone} setValue={setTelefone} secure={false}></Input>
            <Input label="CEP" value={cep} setValue={setCep} secure={false}></Input>
            <Input label="Rua" value={rua} setValue={setRua} secure={false}></Input>
            <Input label="Número" value={numero} setValue={setNumero} secure={false}></Input>
            <Input label="Bairro" value={bairro} setValue={setBairro} secure={false}></Input>
            <Input label="Referência" value={referencia} setValue={setReferencia} secure={false}></Input>
          </ScrollView>
          <Botao texto="Concluir" tipo="destaque" onPress={() => navigation.navigate('CadastroEnderecoCliente')} />
        </View>
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
    alignItems: "center"
  },
  titulo: {
    flex: 0.1,
    // backgroundColor: "red"
  },
  scrollview: {
    flex: 0.6
  },
  botao: {
    flex: 0.2
  }
});