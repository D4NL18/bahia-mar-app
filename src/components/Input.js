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
  const [text, setText] = useState("");

  return (
      <TextInput
        label={props.label}
        mode="outlined"
        value={text}
        onChangeText={(text) => setText(text)}
        selectionColor="#000"
        outlineColor="#000"
        activeOutlineColor="#000"
        underlineColor="black"
        activeUnderlineColor="black"
        style={styles.input}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    width: largura * 0.8,
    backgroundColor: "#86BBD8",
    margin: 20,
  },
});
