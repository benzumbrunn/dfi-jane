import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { fetchDfiPriceFromCoinGecko } from "../api/coingecko";
import Loading from "../components/Loading";
import DfiPrice from "./DfiPrice";
import DfiStats from "./DfiStats";

export default function Info() {
  return (
    <View style={styles.container}>
      <DfiPrice />
      <DfiStats />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
  },
});
