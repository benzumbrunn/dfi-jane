import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { StyleSheet, View } from "react-native";
import Title from "./components/Title";
import Loading from "./components/Loading";
import { pupil } from "./styles/colors";
import Info from "./containers/Info";
import BigNumber from "bignumber.js";
import * as bigNumberFormat from "./bigNumberFormat.json";
import { Text } from "react-native-animatable";

export default function App() {
  BigNumber.config({ FORMAT: bigNumberFormat });

  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title />
      </View>
      <View style={styles.info}>
        <Info />
        <StatusBar backgroundColor={pupil} style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pupil,
    paddingTop: 32,
  },
  title: {
    alignItems: "flex-end",
    marginRight: 32,
  },
  info: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 32,
    marginRight: 32,
  },
});
