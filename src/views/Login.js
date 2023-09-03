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

export default function App() {
  const [visible, setVisible] = useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  
  return (
    <View>
        <PaperProvider>    
            <Botao texto="Teste" onPress={showModal} />
            <Mod visible={visible} dismiss={hideModal} />
        </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
});
