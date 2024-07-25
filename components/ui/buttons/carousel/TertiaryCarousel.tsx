import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import Carousel from "./Carousel";
import { GlobalStyle } from "../../../../constants/GlobalStyles";

type Props = {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<ViewStyle>;
};

export default function TertiaryCarousel({ onPress, icon, style }: Props) {
  return (
    <Carousel style={style} onPress={onPress}>
      <Ionicons name={icon} style={styles.icon} />
    </Carousel>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 32,
    color: GlobalStyle.colors.black50,
  },
});
