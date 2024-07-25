import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { GlobalStyle } from "../../../constants/GlobalStyles";

type Props = {
  error?: boolean;
  onChangeText: (text: string) => void;
};

export default function FormInput({ onChangeText, error = false }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, error && styles.error]}>Input</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
    color: GlobalStyle.colors.black50,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: GlobalStyle.colors.black30,
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
    color: GlobalStyle.colors.black50,
    paddingVertical: 10,
  },
  error: {
    color: GlobalStyle.colors.primaryBase,
  },
});
