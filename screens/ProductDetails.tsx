import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../constants/GlobalStyles";

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.carousel}></View>
      <View style={styles.product}>
        <Text style={styles.name}>Apple AirPods 2</Text>
        <Text style={styles.price}>$128.99</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
  },
  carousel: {
    backgroundColor: "white",
    width: "100%",
    height: 364,
  },
  product: {
    padding: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: GlobalStyle.fonts.weight600,
    color: GlobalStyle.colors.black50,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: GlobalStyle.fonts.weight700,
    color: GlobalStyle.colors.blackBase,
  },
});
