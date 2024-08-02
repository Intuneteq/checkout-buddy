import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../../constants/GlobalStyles";

export default function SearchResultItem() {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.productImage}>
          <Image source={require("../../../assets/images/product.png")} />
        </View>
        <View>
          <Text style={styles.productName}>Apple AirPod 2</Text>
          <Text style={styles.productDescription}>Brown/Gold</Text>
          <Text style={styles.productPrice}>$110.99</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 103,
    width: "100%",
    backgroundColor: GlobalStyle.colors.whiteBase,
    marginTop: 20,
    paddingVertical: 7,
    paddingHorizontal: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...GlobalStyle.shadow.shadow100,
  },
  product: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    height: "100%",
  },
  productImage: {
    width: 75,
    backgroundColor: GlobalStyle.colors.white100,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  productName: {
    color: GlobalStyle.colors.blackDeep,
    fontWeight: 500,
    fontFamily: GlobalStyle.fonts.weight500,
    fontSize: 16,
    marginBottom: 4,
  },
  productDescription: {
    color: "#666666",
    fontWeight: 400,
    fontFamily: GlobalStyle.fonts.weight400,
    fontSize: 12,
    marginBottom: 7,
  },
  productPrice: {
    color: GlobalStyle.colors.black50,
    fontSize: 18,
    fontWeight: 700,
    fontFamily: GlobalStyle.fonts.weight700,
  },
  addToCartText: {
    color: GlobalStyle.colors.blue100,
    fontWeight: 600,
    fontFamily: GlobalStyle.fonts.weight600,
    fontSize: 16,
  },
});
