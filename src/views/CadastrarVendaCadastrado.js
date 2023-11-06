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
  Text
} from "react-native";
import { PaperProvider } from "react-native-paper";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {
  const [funcionario, setFuncionario] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [cliente, setCliente] = useState("");
  const [pagamento, setPagamento] = useState("");

  return (

    <PaperProvider>
      <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
        <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: largura, alignItems: "center" }}>
          <Titulo titulo="Cadastrar Venda" tipo="medio" />
          </View>
          <Input
            label="Funcionário"
            value={funcionario}
            setValue={(texto) => setFuncionario(texto.trim())}
          ></Input>
          <Input
            label="Veículo"
            value={veiculo}
            setValue={(texto) => setVeiculo(texto.trim())}
          ></Input>
          <Input
            label="Cliente"
            value={cliente}
            setValue={(texto) => setCliente(texto.trim())}
          ></Input>
          <Input
            label="Forma de Pagamento"
            value={pagamento}
            setValue={(texto) => setPagamento(texto.trim())}
          ></Input>
          <Botao 
            texto="Seguir" 
            tipo="destaque" 
            onPress={() => navigation.navigate('FazerPedidoFuncionario', {jsonData: {
              funcionario: funcionario,
              veiculo: veiculo,
              cliente: cliente,
              pagamento: pagamento
            }})} 
          />
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