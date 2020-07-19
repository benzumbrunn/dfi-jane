import React from "react";
import * as Animatable from "react-native-animatable";
import { View, StyleSheet } from "react-native";

const DataContainer = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" easing="ease">
        {children}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default DataContainer;
