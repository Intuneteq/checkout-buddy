import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyle } from "../../constants/GlobalStyles";
import TertiaryNavigationBtn from "./buttons/navigation/TertiaryCarousel";

type Props = {
  color: string;
  backgroundColor: string;
  onPress: () => void;
};

export default function ActivityCard({
  onPress,
  color,
  backgroundColor,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        <View>
          <Ionicons name={"scan"} style={styles.icon} color={color} />
        </View>
        <View>
          <Text style={[styles.text, { color }]}>ActivityCard</Text>
        </View>
      </View>
      <View>
        <TertiaryNavigationBtn onPress={() => {}} icon="chevron-forward" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFE9BF",
    height: 97,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 17,
  },
  icon: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight600,
  },
  pressed: {
    opacity: 0.9,
  },
});
