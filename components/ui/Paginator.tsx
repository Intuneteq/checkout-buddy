import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";
import { GlobalStyle } from "../../constants/GlobalStyles";

type Props = {
  count: number;
  scrollX: Animated.Value;
};

export default function Paginator({ count, scrollX }: Props) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#F9C2C2", GlobalStyle.colors.primaryBase, "#F9C2C2"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { backgroundColor }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 8,
  },
});
