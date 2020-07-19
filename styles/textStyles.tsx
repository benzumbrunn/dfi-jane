import { StyleSheet } from "react-native";

import { sand, toothpaste, caramel, coffee } from "./colors";

const defaultFont = "Oswald_400Regular";

export const textStyles = StyleSheet.create({
  title: {
    fontFamily: defaultFont,
    color: sand,
    fontSize: 56,
  },
  subtitle: {
    fontFamily: defaultFont,
    color: caramel,
    fontSize: 32,
  },
  highlight: {
    fontFamily: defaultFont,
    color: sand,
    fontSize: 16,
  },
  regular: {
    fontFamily: defaultFont,
    color: toothpaste,
    fontSize: 16,
  },
  button: {
    fontFamily: defaultFont,
    color: toothpaste,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
