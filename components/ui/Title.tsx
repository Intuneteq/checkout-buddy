import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

import { GlobalStyle } from "../../constants/GlobalStyles";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};
export default function Title({ children, style }: Props) {
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: GlobalStyle.colors.black50,
    fontSize: 24,
    fontFamily: GlobalStyle.fonts.weight700,
  },
});
