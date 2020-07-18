import React from "react";
import { Text } from "react-native";
import { textStyles } from "../styles/textStyles";

const Subtitle = ({ children }: any) => {
  return <Text style={textStyles.subtitle}>{children}</Text>;
};

export default Subtitle;
