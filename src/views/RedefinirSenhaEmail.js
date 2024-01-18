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
const hideModal = () => {setVisible(false); navigation.navigate('RedefinirSenha')}

    return (

        <PaperProvider>
            <ImageBackground style={styles.entirePage} source={background} resizeMode="stretch">
                <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: largura, alignItems: "center", justifyContent: 'flex-end', flex: 3 }}>
                        <Titulo titulo="Redefinir Senha" tipo="medio" />
                    </View>
                    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 4 }}>
                        <Input label="Email"></Input>
                        <Botao texto="Enviar Email" tipo="destaque" onPress={() => showModal()} />
                    </View>
                    <View style={{ justifyContent: 'center', flex: 3 }}>
                        <Text style={{ marginTop: 10, textAlign: 'center', marginHorizontal: 10 }}>
                            Atenção! Entre no endereço de email informado para prosseguir com a redefinição de senha
                        </Text>
                    </View>
                </View>
                <Mod texto="E-mail enviado com sucesso" visible={visible} dismiss={hideModal} botao="Seguir" />
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