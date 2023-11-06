import { BACKEND_ROUTE } from "@env";
import React from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    ScrollView,
    Image,
    ImageBackground,
    Text,
    FlatList,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import Titulo from "../components/Titulo";
import Item from "../components/Item";
import Botao from "../components/Botao";

import background from "../images/background.png";
import Teste from "../images/teste.png";
import { getTokenSessao } from "../services/API.js";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

export default function App({ route, navigation }) {
    const items = route.params.jsonData.product;
    const [aguardandoAsync, setAguardandoAsync] = useState(false);

    const Card = (props) => (
        <View style={styles.card}>
            <Text>{props.title}</Text>
            <Text>{props.quantidade}</Text>
            <Text>R$ {props.preco}</Text>
        </View>
    );

    function comprar() {
        if (aguardandoAsync) return;

        setAguardandoAsync(true);
        const route_handler = BACKEND_ROUTE;
        fetch(`${route_handler}/vendas/inserir/${getTokenSessao()}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    handleErrorBackend(navigation.navigate, res.error);
                } else {
                    // deu bom, proseguir...
                    // console.log(res);
                    login(res.token);
                    // Cliente
                    // navigation.navigate("FazerPedido");
                    // Funcionário
                    navigation.navigate("Menu");
                }
            })
            .catch((err) => {
                // mostrar mensagem de erro...
                console.log(err);
            })
            .finally(() => setAguardandoAsync(false));
    }

    return (
        <PaperProvider>
            <ImageBackground
                style={styles.entirePage}
                source={background}
                resizeMode="stretch"
            >
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Titulo titulo="Confirmar Pedido" tipo="medio" />
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContent}
                        style={styles.scrollView}
                    >
                        <View style={styles.containerCard}>
                            {items.map((item, index) => (
                                <Card title={item.NOME} quantidade={item.COUNT} preco={item.PRECO * item.COUNT}></Card>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.botao}>
                    <Botao
                        tipo="destaque"
                        texto="Finalizar Compra"
                        onPress={() => {
                            console.log(route.params.jsonData)
                            navigation.navigate("Menu");
                        }}
                    />
                </View>
            </ImageBackground>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    entirePage: {
        flex: 1,
        height: altura,
        width: largura,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    titleContainer: {
        flex: 0.3, // Ocupa a parte superior da tela
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        // backgroundColor: 'red'
    },
    scrollViewContent: {
        flexGrow: 1,
        // backgroundColor: 'blue'
    },
    scrollView: {
        flex: 1, // Ocupa a parte restante da tela
        width: "100%", // Ocupa toda a largura da tela
    },
    itemGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 15,
        width: "100%", // Ocupa toda a largura da tela
    },
    botao: {
        marginTop: 20,
        marginBottom: 50,
    },
    infos: {
        fontSize: 16,
        fontWeight: "500",
        margin: 8,
    },

    containerCard: {
        display: "flex",
        flexDirection: "column",
        width: largura,
        justifyContent: "space-between",
        alignItems: "center"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        width: largura * 0.85,
        paddingHorizontal: 20,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: "#86BBD8",
        marginBottom: 20,
    }
});
