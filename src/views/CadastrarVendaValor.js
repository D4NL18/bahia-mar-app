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

    const [visible, setVisible] = useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => {setVisible(false); navigation.navigate('Menu')};

    return (

        <PaperProvider>
            <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
                <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: largura, alignItems: "center" }}>
                        <Titulo titulo="Cadastrar Venda" tipo="medio" />
                    </View>
                    <Input label="Desconto"></Input>
                    <Input label="Valor Pago"></Input>
                    <Input label="Produto"></Input>
                    <Botao texto="Cadastrar" tipo="destaque" onPress={() => showModal()} />
                </View>
                <Mod texto="Venda cadastrada com sucesso" visible={visible} dismiss={hideModal} botao="Sair" />
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