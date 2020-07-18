import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { StyleSheet, View } from "react-native";
import Title from "./components/Title";
import Loading from "./components/Loading";
import { pupil } from "./styles/colors";
import DfiPrice from "./components/DfiPrice";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Title />
      <DfiPrice />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pupil,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
  },
});
