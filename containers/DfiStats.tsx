import React, { PureComponent } from "react";
import Loading from "../components/Loading";
import DataContainer from "../components/DataContainer";
import Subtitle from "../components/Subtitle";
import DataRow from "../components/DataRow";

import { fetchDefiChainStats, DefiChainData } from "../api/defichain";

type Props = {
  lastUpdated: number;
};

type State = {
  dfiStats?: DefiChainData;
  loading: boolean;
  lastUpdated: number;
};

export default class DfiStats extends PureComponent<Props, State> {
  state: State = {
    dfiStats: undefined,
    loading: true,
    lastUpdated: 0,
  };

  async reloadData() {
    this.setState({
      loading: true,
    });
    const dfiChainStatsResult = await fetchDefiChainStats();
    this.setState({
      dfiStats: dfiChainStatsResult,
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
