import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CarouselPrimary from './components/ui/buttons/carousel/PrimaryCarousel';
import SecondaryCarousel from './components/ui/buttons/carousel/SecondaryCarousel';
import TertiaryCarousel from './components/ui/buttons/carousel/TertiaryCarousel';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TertiaryCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
