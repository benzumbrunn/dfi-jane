import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { textStyles } from "../styles/textStyles";

export default function DataRow(props: { label: string; text: string }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[textStyles.highlight, styles.label]}>{props.label}</Text>
      <Text style={textStyles.regular}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    minWidth: 80,
  },
});
