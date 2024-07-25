import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import NavigationBtn from "./NavigationBtn";
import { GlobalStyle } from "../../../../constants/GlobalStyles";

type Props = {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<ViewStyle>;
};

const PrimaryNavigationBtn = ({ onPress, icon, style }: Props) => {
  return (
    <NavigationBtn style={[styles.button, style]} onPress={onPress}>
      <Ionicons name={icon} style={styles.icon} />
    </NavigationBtn>
  );
};

export default PrimaryNavigationBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyle.colors.primaryBase,
  },
  icon: {
    fontSize: 32,
    color: GlobalStyle.colors.white10,
  },
});

// chevron-forward
