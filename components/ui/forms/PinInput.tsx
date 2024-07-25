import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { GlobalStyle } from "../../../constants/GlobalStyles";

type Props = {
  onChangePin: (pin: number) => void;
};

export default function PinInput({ onChangePin }: Props) {
   const [enteredPin, setEnteredPin] = useState("");
   const [keyPressed, setKeyPressed] = useState(false);
  const [pinIsActive, setPinIsActive] = useState(false);

  function keyPressedHandler() {
    if (enteredPin) {
      setKeyPressed(true);
    } else {
      setKeyPressed(false);
    }
  }

  function onchangePinHandler(pin: string) {
    setEnteredPin(pin);
    onChangePin(parseInt(pin));
  }

  useEffect(() => {
    setPinIsActive(keyPressed || !!enteredPin);
  }, [keyPressed, enteredPin]);

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={1}
        style={[styles.input, pinIsActive && styles.active]}
        keyboardType="number-pad"
        onKeyPress={keyPressedHandler}
        onChangeText={onchangePinHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
  },
  input: {
    width: 48,
    borderBottomWidth: 1,
    borderColor: GlobalStyle.colors.black30,
    paddingHorizontal: 17,
    paddingVertical: 8,
    fontSize: 24,
    fontFamily: GlobalStyle.fonts.weight500,
  },
  active: {
    borderColor: GlobalStyle.colors.primaryBase,
  },
});
