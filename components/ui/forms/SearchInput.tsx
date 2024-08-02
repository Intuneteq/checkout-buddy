import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../../constants/GlobalStyles'
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from '../buttons/flat/PrimaryButton';

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search QR Code</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={18} color={GlobalStyle.colors.black0} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={GlobalStyle.colors.black20}
        />
      </View>
    </View>
  )
}

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
    color: GlobalStyle.colors.black50,
    marginBottom: 11,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GlobalStyle.colors.black0,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: GlobalStyle.fonts.weight500,
    color: GlobalStyle.colors.black50,
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
});
