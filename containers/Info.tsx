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
      <View style={styles.container}>
        <DfiPrice lastUpdated={this.state.lastUpdated} />
        <DfiStats lastUpdated={this.state.lastUpdated} />
        <BaseButton
          title="Refresh"
          onPress={() =>
            this.setState({ lastUpdated: this.state.lastUpdated + 1 })
          }
        ></BaseButton>
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
