import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { textStyles } from "../styles/textStyles";

export default function DfiPrice() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.subtitle}>DFI price</Text>
      <Text style={textStyles.regular}>USD 0.45214</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    padding: 8,
  },
});
