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

export default function App() {
  
  return (
    <View>
        <PaperProvider>
            <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
                <View style={{flex: 10, justifyContent: "center", alignItems: "center"}}>
                    <View style={{width: largura, alignItems: "center"}}>
                        <Image source={logo} ></Image>
                    </View>
                    <Input label="Email"></Input>
                    <Input label="Senha"></Input>
                    <Botao texto="Entrar" tipo="destaque" onPress={()=>console.log("Aqueles clique")} />
                    <Text style={{marginTop: 10}}>Esqueceu a senha? Clique aqui para recuperá-la</Text>
                </View>
            </ImageBackground>
        </PaperProvider>
    </View>
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