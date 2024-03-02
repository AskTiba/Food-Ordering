import { FlatList, StyleSheet } from "react-native";
import { View } from "@components/Themed";
import ProductListItem from "@components/ProductListItem";
import products from "@assets/data/products";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
