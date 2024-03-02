import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn(`Adding to cart: ${product?.name},  size: ${selectedSize}`);
  };

  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View className="bg-white rounded-2xl p-2 flex-1 shadow overflow-hidden">
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className="w-[90%] aspect-square mx-auto my-5"
      />
      <Text className="text-[20px]">Select Size</Text>
      <View className="flex-row justify-evenly">
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => setSelectedSize(size)}
            className={`
            w-[40px] 
            font-semibold 
            rounded-[25px] 
            justify-center 
            items-center 
            p-2 
            mt-3
            ${selectedSize === size ? "bg-[#555]" : ""}
          `}
          >
            <Text
              className={`
              text-[18px] 
              text-[#ffd700] 
              ${selectedSize === size ? "text-[#ffd700]" : "text-[#000]"}
              `}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text className="text-[#32cd32] text-[18px] mt-auto">${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetailScreen;
