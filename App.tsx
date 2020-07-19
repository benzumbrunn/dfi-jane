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
      <Title />
      <Text>{bigNumberFormat.toString()}</Text>
      <Info />
      <StatusBar backgroundColor={pupil} style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pupil,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 48,
  },
});
