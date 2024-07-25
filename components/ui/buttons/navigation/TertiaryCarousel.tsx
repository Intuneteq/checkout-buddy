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

export default function TertiaryNavigationBtn({ onPress, icon, style }: Props) {
  return (
    <NavigationBtn style={style} onPress={onPress}>
      <Ionicons name={icon} style={styles.icon} />
    </NavigationBtn>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 32,
    color: GlobalStyle.colors.black50,
  },
});
