import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { TextInput } from "react-native-paper";

const largura = Dimensions.get("screen").width;

export default function Input(props) {

  const ChangeText = (texto) =>{
    props.setValue(texto);
  }
  
  return (
      <TextInput
        label={props.label}
        mode="outlined"
        value={props.value}
        onChangeText={(text) => {ChangeText(text)}}
        secureTextEntry={props.secure}

        selectionColor="#86BBD8"
        outlineColor="#86BBD8"
        activeOutlineColor="#86BBD8"
        underlineColor="#86BBD8"
        activeUnderlineColor="black"
        style={styles.Input}
        outlineStyle={styles.Borda}
      />
  );
}

const styles = StyleSheet.create({
  Input: {
    width: largura * 0.8,
    backgroundColor: "white",
    margin: 20,
    paddingLeft: 10
  },
  Borda:{
    borderRadius: 30
  }
});
