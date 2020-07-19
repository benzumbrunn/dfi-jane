import React from "react";
import { ButtonProperties, Button } from "react-native";
import { coffee } from "../styles/colors";

export default function BaseButton(props: ButtonProperties) {
  return <Button color={coffee} {...props} />;
}
