import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { GlobalStyle } from "../../constants/GlobalStyles";

type Props = {
  source: ImageSourcePropType;
  onPress: () => void;
};

export default function ImageButton({ source, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={[styles.imageContainer]}>
        <Image style={styles.image} source={source} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: GlobalStyle.colors.black10,
    width: 64,
    height: 64,
    borderRadius: (64 + 64) / 2,
    backgroundColor: GlobalStyle.colors.whiteBase,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },

  imageContainer: {
    width: 24,
    height: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
