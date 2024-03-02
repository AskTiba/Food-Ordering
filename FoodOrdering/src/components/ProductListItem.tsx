import { Image } from "react-native";
import { Text, View } from "../components/Themed";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View className="flex-1 bg-white p-[10px] rounded-[20px] m-2">
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className="w-full aspect-square"
      />
      <Text className="text-[18px] font-[600] my-[10px]">{product.name}</Text>
      <Text className="text-[#32cd32]">${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
