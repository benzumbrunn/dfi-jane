import React from "react";
import { View, StyleSheet } from "react-native";

const DataContainer = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default DataContainer;
