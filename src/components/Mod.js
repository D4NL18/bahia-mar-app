import { useState } from "react";
import { Dimensions, Text, StyleSheet, View } from "react-native";

// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
// } from "react-native";
import { Button, Modal, PaperProvider, Portal, Provider } from "react-native-paper";

const largura = Dimensions.get("screen").width;
const containerStyle = { marginHorizontal: 50 };

export default function Mod(props) {

  return (
    <Portal style={styles.Portal}>
      <Modal visible={props.visible} onDismiss={props.dismiss} contentContainerStyle={containerStyle}>
        <View style={styles.Quadro}>
          <Text style={styles.Texto}>{props.texto}</Text>
          <Button mode="elevated" style={styles.Botao} labelStyle={styles.TextoBotao} onPress={props.dismiss}>{props.botao}</Button>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  Quadro:{
    backgroundColor: 'white',
    minHeight: 200,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#F6AE2D",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  Texto:{
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center"
  },
  Botao:{
    backgroundColor: "#758E4F"
  },
  TextoBotao:{
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'white'
  }
});
