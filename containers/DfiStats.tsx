import React, { PureComponent } from "react";
import Loading from "../components/Loading";
import DataContainer from "../components/DataContainer";
import Subtitle from "../components/Subtitle";
import DataRow from "../components/DataRow";

import { fetchDfiPriceFromCoinGecko } from "../api/coingecko";
import { fetchDefiChainStats, DefiChainData } from "../api/defichain";

export default class DfiStats extends PureComponent {
  state: {
    loading: boolean;
    dfiStats: DefiChainData | null;
  } = {
    loading: true,
    dfiStats: null,
  };

  async componentDidMount() {
    const dfiChainStatsResult = await fetchDefiChainStats();
    this.setState({
      dfiStats: dfiChainStatsResult,
      loading: false,
    });
  }

  render() {
    if (this.state.loading || !this.state.dfiStats) {
      return <Loading />;
    }

    const { tokens } = this.state.dfiStats;

    return (
      <DataContainer>
        <Subtitle>How many?</Subtitle>
        <DataRow label={"Max"} text={tokens.max.toString()} />
        <DataRow label={"Total"} text={tokens.supply.total.toString()} />
        <DataRow
          label={"Circulation"}
          text={tokens.supply.circulation.toString()}
        />
        <DataRow
          label={"Foundation"}
          text={tokens.supply.foundation.toString()}
        />
        <DataRow
          label={"Community"}
          text={tokens.supply.community.toString()}
        />
      </DataContainer>
    );
  }
}
