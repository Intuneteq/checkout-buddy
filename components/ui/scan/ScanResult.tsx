import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconButton from "../IconButton";
import ModalContainer from "../modals/ModalContainer";
import PrimaryButton from "../buttons/flat/PrimaryButton";
import SecondaryButton from "../buttons/flat/SecondaryButton";

import { GlobalStyle } from "../../../constants/GlobalStyles";

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
};

export default function ScanResult({ modalVisible, closeModal }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<Cart[]>([]);
  const [isAdded, setIsAdded] = useState(false);

  const product = {
    productId: "1",
    quantity: 1,
  };

  useEffect(() => {
    const foundItem = cart.find((item) => item.productId === product.productId);

    if (foundItem) {
      setIsAdded(true);
    }
  }, [cart]);

  function addHandler() {
    setQuantity((prev) => prev + 1);
  }

  function removeHandler() {
    if (quantity === 1) return;

    setQuantity((prev) => prev - 1);
  }

  function scanAgainHandler() {}

  function addToCartHandler() {
    setCart((prev) => [...prev, product]);
  }

  return (
    <ModalContainer modalVisible={modalVisible} closeModal={() => {}}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {isAdded ? (
            <Text style={[styles.title, styles.addedTitle]}>
              Item Added to Cart
            </Text>
          ) : (
            <Text style={styles.title}>Product Name</Text>
          )}
          <IconButton
            icon="close-circle-outline"
            size={24}
            onPress={closeModal}
            style={styles.iconButton}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.imageContainer}></View>
          <View style={styles.productDetail}>
            <View>
              <Text style={styles.product}>Apple Airpod 2</Text>
              <Text style={styles.store}>Phone world store</Text>
              <Text style={styles.price}>$128.99</Text>
            </View>
            {isAdded && (
              <View style={styles.added}>
                <Text style={styles.addedText}>Added</Text>
                <Ionicons
                  name={"checkmark"}
                  color={GlobalStyle.colors.green100}
                  size={16}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.quantityControl}>
          <Text style={styles.quantityText}>Change quantity:</Text>

          <View style={styles.control}>
            <IconButton
              icon="remove"
              size={12}
              color={GlobalStyle.colors.black50}
              style={styles.icon}
              onPress={removeHandler}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <IconButton
              icon="add"
              size={12}
              color={GlobalStyle.colors.black50}
              style={styles.icon}
              onPress={addHandler}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <SecondaryButton onPress={scanAgainHandler}>
            Scan Again
          </SecondaryButton>
          <PrimaryButton onPress={addToCartHandler}>Add to cart</PrimaryButton>
        </View>
      </View>
    </ModalContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    width: "100%",
    marginBottom: 40,
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontSize: 18,
    color: GlobalStyle.colors.black50,
    fontFamily: GlobalStyle.fonts.weight600,
  },
  addedTitle: {
    color: GlobalStyle.colors.green100,
  },
  iconButton: {
    position: "absolute",
    right: 0,
  },
  details: {
    gap: 24,
    width: "100%",
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: 108,
    height: 92,
    borderRadius: 8,
    backgroundColor: GlobalStyle.colors.white100,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  productDetail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product: {
    color: GlobalStyle.colors.blackBase,
    fontFamily: GlobalStyle.fonts.weight700,
    fontSize: 16,
    marginBottom: 4,
  },
  store: {
    fontSize: 14,
    marginBottom: 16,
    color: GlobalStyle.colors.black50,
    fontFamily: GlobalStyle.fonts.weight500,
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: GlobalStyle.colors.primaryBase,
    fontFamily: GlobalStyle.fonts.weight700,
  },
  added: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addedText: {
    fontSize: 12,
    color: GlobalStyle.colors.green100,
    fontFamily: GlobalStyle.fonts.weight500,
    fontWeight: 500,
  },
  quantityControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 44,
  },
  quantityText: {
    color: GlobalStyle.colors.blackBase,
    fontWeight: 600,
    fontFamily: GlobalStyle.fonts.weight600,
    fontSize: 16,
  },
  control: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
  },
  icon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: (32 + 32) / 2,
    backgroundColor: GlobalStyle.colors.white100,
  },
  quantity: {
    fontSize: 16,
    color: GlobalStyle.colors.blackBase,
    fontFamily: GlobalStyle.fonts.weight500,
  },
  buttons: {
    gap: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
