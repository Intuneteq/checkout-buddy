import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Title from "./components/ui/Title";
import urbanist from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import SearchQrCode from "./components/ui/scan/SearchQrCode";
import useLoadFonts from "./hooks/useLoadFonts";
import ScanResult from "./components/ui/scan/ScanResult";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { loaded, error } = useLoadFonts();
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScanResult modalVisible={modalVisible} closeModal={closeModal} />
      {/* <SearchQrCode modalVisible={modalVisible} closeModal={closeModal} /> */}
      {/* <SelectAction modalVisible={modalVisible} closeModal={closeModal} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});
