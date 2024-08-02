import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export default function IconButton({
  icon,
  size,
  color,
  style,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
