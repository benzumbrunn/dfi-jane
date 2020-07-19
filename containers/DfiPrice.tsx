import React, { PureComponent } from "react";
import Loading from "../components/Loading";
import DataContainer from "../components/DataContainer";
import Subtitle from "../components/Subtitle";
import DataRow from "../components/DataRow";

import { fetchDfiPriceFromCoinGecko } from "../api/coingecko";
import { View } from "react-native";

type Props = {
  lastUpdated: number;
};

type State = {
  dfiPriceUsd: string;
  dfiPriceBtc: string;
  loading: boolean;
  lastUpdated: number;
};

export default class DfiPrice extends PureComponent<Props, State> {
  state = {
    dfiPriceUsd: "...",
    dfiPriceBtc: "...",
    loading: true,
    lastUpdated: 0,
  };

  async reloadData() {
    this.setState({
      loading: true,
    });
    const dfiPriceResult = await fetchDfiPriceFromCoinGecko();
    this.setState({
      dfiPriceUsd: dfiPriceResult.defichain.usd.toString(),
      dfiPriceBtc: dfiPriceResult.defichain.btc.toString(),
      loading: false,
      lastUpdated: this.props.lastUpdated,
    });
  }

  async componentDidMount() {
    await this.reloadData();
  }

  async componentDidUpdate() {
    if (this.props.lastUpdated > this.state.lastUpdated) {
      await this.reloadData();
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <DataContainer>
        <View>
          <Subtitle>How much?</Subtitle>
          <DataRow label={"USD"} text={this.state.dfiPriceUsd} />
          <DataRow label={"BTC"} text={this.state.dfiPriceBtc} />
        </View>
      </DataContainer>
    );
  }
}
