import React, { PureComponent } from "react";
import Loading from "../components/Loading";
import DataContainer from "../components/DataContainer";
import Subtitle from "../components/Subtitle";
import DataRow from "../components/DataRow";

import { fetchDfiPriceFromCoinGecko } from "../api/coingecko";

export default class DfiPrice extends PureComponent {
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
      <DataContainer>
        <Subtitle>How much?</Subtitle>
        <DataRow label={"USD"} text={this.state.dfiPriceUsd} />
        <DataRow label={"BTC"} text={this.state.dfiPriceBtc} />
      </DataContainer>
    );
  }
}
