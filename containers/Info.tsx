import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { fetchDfiPriceFromCoinGecko } from "../api/coingecko";
import Loading from "../components/Loading";
import DfiPrice from "./DfiPrice";
import DfiStats from "./DfiStats";

export default class Info extends PureComponent {
  state = {
    dfiPriceUsd: "...",
    dfiPriceBtc: "...",
    loading: true,
  };

  async componentDidMount() {
    const dfiPriceResult = await fetchDfiPriceFromCoinGecko();
    this.setState({
      dfiPriceUsd: dfiPriceResult.defichain.usd.toString(),
      dfiPriceBtc: dfiPriceResult.defichain.btc.toString(),
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <DfiPrice />
        <DfiStats />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
  },
});
