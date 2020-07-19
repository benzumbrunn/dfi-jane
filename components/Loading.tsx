import React from "react";
import * as Animatable from "react-native-animatable";
import { View, StyleSheet } from "react-native";

import Glow from "../assets/glow.svg";

export default function Loading() {
  return (
    <View style={styles.spinner}>
      <Animatable.View
        animation="rotate"
        easing="linear"
        iterationCount="infinite"
      >
        <Glow />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  spinner: {
    width: 64,
    height: 64,
    margin: 24,
  },
});
