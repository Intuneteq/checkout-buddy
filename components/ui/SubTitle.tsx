import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import { GlobalStyle } from "../../constants/GlobalStyles";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function SubTitle({ children, style }: Props) {
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: GlobalStyle.colors.black40,
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
  },
});
