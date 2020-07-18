import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { textStyles } from "../styles/textStyles";

export default function PriceRow(props: { currency: string; price: number }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[textStyles.highlight, style.currency]}>
        {props.currency}
      </Text>
      <Text style={textStyles.regular}>{props.price}</Text>
    </View>
  );
}

export const style = StyleSheet.create({
  currency: {
    width: 30,
  },
});
