import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import ModalContainer from "../modals/ModalContainer";
import { GlobalStyle } from "../../../constants/GlobalStyles";
import SecondaryButton from "../buttons/flat/SecondaryButton";
import PrimaryButton from "../buttons/flat/PrimaryButton";
import FlatButton from "../buttons/flat/FlatButton";

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
};

const SelectAction = ({ modalVisible, closeModal }: Props) => {
  return (
    <ModalContainer modalVisible={modalVisible} closeModal={closeModal}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Action</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/scan.png")}
          />
        </View>
        <Text style={styles.description}>
          Scan an Item QR code or enter the code manually
        </Text>
        <View style={styles.buttonContainer}>
          <FlatButton
            style={styles.codeButton}
            textStyle={styles.codeButtonText}
            onPress={() => {}}
          >
            Enter Code
          </FlatButton>
          <FlatButton
            style={styles.scanButton}
            textStyle={styles.scanButtonText}
            onPress={() => {}}
          >
            Scan Code
          </FlatButton>
        </View>
      </View>
    </ModalContainer>
  );
};

export default SelectAction;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: GlobalStyle.fonts.weight600,
    color: GlobalStyle.colors.primary100,
    marginBottom: 41,
  },
  imageContainer: {
    width: 79,
    height: 79,
    marginBottom: 17,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    fontFamily: GlobalStyle.fonts.weight500,
    fontSize: 16,
    textAlign: "center",
    maxWidth: 200,
    marginBottom: 33,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
  },
  codeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: GlobalStyle.colors.primaryBase,
  },
  codeButtonText: {
    color: GlobalStyle.colors.primaryBase,
  },
  scanButton: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primaryBase,
  },
  scanButtonText: {
    color: GlobalStyle.colors.whiteBase,
  },
});
