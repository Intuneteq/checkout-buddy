import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { GlobalStyle } from "../../../constants/GlobalStyles";

type Props = {
  error?: boolean;
  onChangeText: (text: string) => void;
};

export default function PasswordInput({ onChangeText, error = false }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  function displayPasswordHandler() {
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={[styles.label, error && styles.error]}>Input</Text>
        <Pressable onPress={displayPasswordHandler}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <TextInput
        secureTextEntry={showPassword ? false : true}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  icon: {
    fontSize: 18,
    color: GlobalStyle.colors.black50,
  },
  error: {
    color: GlobalStyle.colors.primaryBase,
  },
});
