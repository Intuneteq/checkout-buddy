import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Urbanist_100Thin,
  Urbanist_200ExtraLight,
  Urbanist_300Light,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";

export default function useLoadFonts() {
  const [loaded, error] = useFonts({
    Urbanist_100Thin,
    Urbanist_200ExtraLight,
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
  });

  /**
   * Hide the Application's Splash screen when the custom font is loaded
   */
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Return the loaded value and error value
  return { loaded, error };
}
