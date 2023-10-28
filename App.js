import Menu from "./src/views/Menu.js";
import Login from "./src/views/Login.js";
import RedefinirSenhaEmail from "./src/views/RedefinirSenhaEmail.js";
import RedefinirSenha from "./src/views/RedefinirSenha.js";
import CadastrarVendaCadastrado from "./src/views/CadastrarVendaCadastrado.js";
import CadastrarVendaSemCadastro from "./src/views/CadastrarVendaSemCadastro.js";
import CadastrarVendaValor from "./src/views/CadastrarVendaValor.js";
import CadastrarInfosCliente from "./src/views/CadastrarInfosCliente.js";
import CadastroInfosCliente from "./src/views/CadastroInfosCliente.js";
import CadastrarEnderecoCliente from "./src/views/CadastrarEnderecoCliente.js";
import CadastroEnderecoCliente from "./src/views/CadastroEnderecoCliente.js";
import FazerPedido from "./src/views/FazerPedido.js";
import ConfirmarPedido from "./src/views/ConfirmarPedido.js";
import FazerPedidoFuncionario from "./src/views/FazerPedidoFuncionario.js";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroInfosCliente"
          component={CadastroInfosCliente}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroEnderecoCliente"
          component={CadastroEnderecoCliente}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RedefinirSenhaEmail"
          component={RedefinirSenhaEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RedefinirSenha"
          component={RedefinirSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarVendaCadastrado"
          component={CadastrarVendaCadastrado}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarVendaSemCadastro"
          component={CadastrarVendaSemCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarVendaValor"
          component={CadastrarVendaValor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarInfosCliente"
          component={CadastrarInfosCliente}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarEnderecoCliente"
          component={CadastrarEnderecoCliente}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FazerPedido"
          component={FazerPedido}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmarPedido"
          component={ConfirmarPedido}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FazerPedidoFuncionario"
          component={FazerPedidoFuncionario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
