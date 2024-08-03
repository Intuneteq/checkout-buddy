import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Paginator from "./Paginator";
import IconButton from "./IconButton";
import { GlobalStyle } from "../../constants/GlobalStyles";

export default function ProductCourasel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const data = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
    {
      key: 4,
    },
  ];

  const backPressHandler = () => {
    if (currentIndex <= 0) return;

    if (slideRef.current === null) return;

    slideRef.current.scrollToIndex({ index: currentIndex - 1 });
    setCurrentIndex(currentIndex - 1);
  };

  const forwardPressHandler = () => {
    if (currentIndex >= data.length - 1) return;

    if (slideRef.current === null) return;

    slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <IconButton
          icon="chevron-back-outline"
          size={24}
          color={GlobalStyle.colors.black30}
          onPress={backPressHandler}
        />
        <View style={[styles.listContainer]}>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/images/product.png")}
                />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            viewabilityConfig={viewConfig}
            ref={slideRef}
          />
        </View>
        <IconButton
          icon="chevron-forward-outline"
          size={24}
          color={GlobalStyle.colors.black30}
          onPress={forwardPressHandler}
        />
      </View>
      <View style={styles.footer}>
        <Paginator count={data.length} scrollX={scrollX} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,

    borderWidth: 1
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    height: 187,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  imageContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 220,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  footer: {
    flex: 1,
    width: "100%",
    marginHorizontal: "auto",
  },
});
