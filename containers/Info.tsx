import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import DfiPrice from "./DfiPrice";
import DfiStats from "./DfiStats";
import BaseButton from "../components/BaseButton";

export default class Info extends PureComponent {
  state = {
    lastUpdated: 0,
  };

  render() {
    return (
      <View>
        <DfiPrice lastUpdated={this.state.lastUpdated} />
        <DfiStats lastUpdated={this.state.lastUpdated} />
        <BaseButton
          onPress={() =>
            this.setState({ lastUpdated: this.state.lastUpdated + 1 })
          }
        >
          REFRESH
        </BaseButton>
      </View>
    );
  }
}
