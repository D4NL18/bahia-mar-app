import Titulo from "../components/Titulo";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Mod from "../components/Mod";

import background from "../images/background.png";
import logo from '../images/logo.png';

import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import { PaperProvider } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import { getTokenSessao } from "../services/API";
import { BACKEND_ROUTE } from "@env";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ navigation }) {
  const [funcionario, setFuncionario] = useState([]);
  const [veiculo, setVeiculo] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [pagamento, setPagamento] = useState([]);

  function bind_request(route, setState) {
    fetch(`${route}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log(`Request Error: ${res.error}`);
        } else {
          setState(res);
        }
      })
  }

  useEffect(() => {
    const route_handler = BACKEND_ROUTE;

    bind_request(`${route_handler}/funcionarios/obter/${getTokenSessao()}`, setFuncionario);
    bind_request(`${route_handler}/veiculos/obter/${getTokenSessao()}`, setVeiculo);
    bind_request(`${route_handler}/clientes/obter/${getTokenSessao()}`, setCliente);
    bind_request(`${route_handler}/opcoes-pag/obter/${getTokenSessao()}`, setPagamento);
  }, [])

  const funcionario_select = funcionario.map((item) => { return { label: item.NOME, value: item.ID } })
  const veiculo_select = veiculo.map((item) => { return { label: item.MODELO, value: item.ID } })
  const cliente_select = cliente.map((item) => { return { label: item.NOME, value: item.ID } })
  const pagamento_select = pagamento.map((item) => { return { label: item.NOME, value: item.ID } })

  let sale_conf = {
    funcionario: 0,
    veiculo: 0,
    cliente: 0,
    pagamento: 0
  }

  return (

    <PaperProvider>
      <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
        <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: largura, alignItems: "center" }}>
            <Titulo titulo="Cadastrar Venda" tipo="medio" />
          </View>
          <View style={styles.container}>
            <RNPickerSelect style={pickerStyle} onValueChange={(value) => { sale_conf.funcionario = value }} items={funcionario_select} />
            <RNPickerSelect onValueChange={(value) => { sale_conf.veiculo = value }} items={veiculo_select} />
            <RNPickerSelect onValueChange={(value) => { sale_conf.cliente = value }} items={cliente_select} />
            <RNPickerSelect onValueChange={(value) => { sale_conf.pagamento = value }} items={pagamento_select} />
          </View>

          <Botao
            texto="Seguir"
            tipo="destaque"
            onPress={() => navigation.navigate('FazerPedidoFuncionario', {
              jsonData: {
                funcionario: funcionario,
                veiculo: veiculo,
                cliente: cliente,
                pagamento: pagamento
              }
            })}
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
  container: {
    width: largura*0.8,
  }
});


const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  }
});