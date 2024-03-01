import { Image } from "react-native";
import { Text, View } from "../components/Themed";

const ProductListItem = ({ product }) => {
  return (
    <View className="bg-white p-[10px] rounded-[20px]">
      <Image source={{ uri: product.image }} className="w-full aspect-square" />
      <Text className="text-[30px] font-[600] my-[10px]">{product.name}</Text>
      <Text className="text-[#32cd32]">${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
