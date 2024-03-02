import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable
        onPress={() => {}}
        className="flex-1 bg-white p-[10px] rounded-[20px] mt-2"
        style={styles.container}
      >
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          className="w-full aspect-square"
          style={styles.image}
        />
        <Text className="text-[18px] font-[600] my-[10px]" style={styles.title}>
          {product.name}
        </Text>
        <Text className="text-[#32cd32]">${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    marginVertical: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
  price: {},
});
