import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GlobalStyle } from "../../../constants/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

export default function SearchInput() {
  function searchHandler() {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Item Code</Text>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={18} color={GlobalStyle.colors.black0} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={GlobalStyle.colors.black20}
          />
        </View>
        <TouchableOpacity onPress={searchHandler} style={styles.button}>
          <Ionicons
            name="search"
            size={18}
            color={GlobalStyle.colors.whiteBase}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    color: GlobalStyle.colors.black50,
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
    fontWeight: 500,
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    height: 44,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 15,
    flex: 1,
    height: "100%",
    backgroundColor: GlobalStyle.colors.whiteBase,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    overflow: "hidden",
  },
  input: {
    height: "100%",
    flex: 1,
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
    color: GlobalStyle.colors.black50,
    paddingHorizontal: 8,
  },
  button: {
    width: 58,
    height: "100%",
    backgroundColor: GlobalStyle.colors.primaryBase,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
