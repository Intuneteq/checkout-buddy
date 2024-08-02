import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SearchInput from "../forms/SearchInput";
import ModalContainer from "../modals/ModalContainer";
import IconButton from "../IconButton";
import { GlobalStyle } from "../../../constants/GlobalStyles";
import PrimaryButton from "../buttons/flat/PrimaryButton";

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
};

const SearchQrCode = ({ modalVisible, closeModal }: Props) => {
  return (
    <ModalContainer modalVisible={modalVisible} closeModal={() => {}}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Manual Input</Text>
          <IconButton
            icon="close-circle-outline"
            size={24}
            onPress={closeModal}
          />
        </View>
        <SearchInput />
        <View style={styles.butttonContainer}>
          <PrimaryButton onPress={() => {}}>Search Item</PrimaryButton>
        </View>
      </View>
    </ModalContainer>
  );
};

export default SearchQrCode;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginBottom: 33,
  },
  title: {
    fontFamily: GlobalStyle.fonts.weight600,
    fontSize: 18,
    color: GlobalStyle.colors.black50,
  },
  butttonContainer: {
   marginTop: 52,
   width: '100%'
  }
});
