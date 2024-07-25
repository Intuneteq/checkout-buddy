import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { GlobalStyle } from "../../../../constants/GlobalStyles";

type Props = {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  onPress: () => void;
};

export default function FlatButton({
  children,
  style,
  textStyle,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 53,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: 18,
    fontFamily: GlobalStyle.fonts.weight500,
  },
});
