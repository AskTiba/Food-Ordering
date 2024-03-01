import { StyleSheet } from "react-native";
import { View } from "@components/Themed";
import ProductListItem from "@components/ProductListItem";
import products from "@assets/data/products";

export default function MenuScreen() {
  return (
    <View className="">
      <ProductListItem product={products[5]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({});
