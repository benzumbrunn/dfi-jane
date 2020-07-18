import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { textStyles } from "../styles/textStyles";
import { fetchDfiPriceFromCoinGecko } from "../api/coingecko";
import Loading from "./Loading";
import PriceRow from "./PriceRow";

export default class DfiPrice extends PureComponent {
  state = {
    dfiPriceUsd: 0,
    dfiPriceBtc: 0,
    loading: true,
  };

  async componentDidMount() {
    const dfiPriceResult = await fetchDfiPriceFromCoinGecko();
    this.setState({
      dfiPriceUsd: dfiPriceResult.defichain.usd,
      dfiPriceBtc: dfiPriceResult.defichain.btc,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <Text style={textStyles.subtitle}>DFI price</Text>
        <PriceRow currency={"USD"} price={this.state.dfiPriceUsd} />
        <PriceRow currency={"BTC"} price={this.state.dfiPriceBtc} />
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
