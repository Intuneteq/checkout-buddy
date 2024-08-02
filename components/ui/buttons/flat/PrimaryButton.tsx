import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

import FlatButton from "./FlatButton";
import { GlobalStyle } from "../../../../constants/GlobalStyles";

type Props = {
  onPress: () => void;
  children: ReactNode;
};

export default function PrimaryButton({ onPress, children }: Props) {
  return (
    <FlatButton style={styles.button} textStyle={styles.text} onPress={onPress}>
      {children}
    </FlatButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyle.colors.primaryBase,
  },
  text: {
    color: GlobalStyle.colors.whiteBase,
  },
});
