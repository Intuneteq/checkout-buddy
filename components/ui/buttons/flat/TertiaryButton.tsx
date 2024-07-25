import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

import FlatButton from "./FlatButton";
import { GlobalStyle } from "../../../../constants/GlobalStyles";

type Props = {
  onPress: () => void;
  children: ReactNode;
};


export default function TertiaryButton({ onPress, children }: Props) {
   return (
     <FlatButton style={styles.button} textStyle={styles.text} onPress={onPress}>
       {children}
     </FlatButton>
   );
}

const styles = StyleSheet.create({
   button: {
      borderWidth: 1,
      borderColor: GlobalStyle.colors.secondary90
   },
   text: {
      color: GlobalStyle.colors.secondary90
   }
})