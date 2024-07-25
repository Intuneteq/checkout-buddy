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

const SecondaryCarousel = ({ onPress, icon, style }: Props) => {
  return (
    <Carousel style={[styles.button, style]} onPress={onPress}>
      <Ionicons name={icon} style={styles.icon} />
    </Carousel>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderColor: GlobalStyle.colors.secondaryBase,
  },
  icon: {
    fontSize: 32,
    color: GlobalStyle.colors.secondaryBase,
  },
});

export default SecondaryCarousel;
