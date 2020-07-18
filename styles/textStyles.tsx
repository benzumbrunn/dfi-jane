import { StyleSheet } from "react-native";

import { sand, toothpaste, caramel, coffee } from "./colors";

const defaultFont = "Oswald_400Regular";

export const textStyles = StyleSheet.create({
  title: {
    fontFamily: defaultFont,
    color: sand,
    fontSize: 40,
  },
  subtitle: {
    fontFamily: defaultFont,
    color: caramel,
    fontSize: 20,
  },
  highlight: {
    fontFamily: defaultFont,
    color: sand,
    fontSize: 14,
  },
  regular: {
    fontFamily: defaultFont,
    color: toothpaste,
    fontSize: 14,
  },
});
