import React from "react";
import {
  ButtonProperties,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { coffee, toothpaste } from "../styles/colors";
import { textStyles } from "../styles/textStyles";

export default function BaseButton(props: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={textStyles.button}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: coffee,
    borderRadius: 16,
  },
});
