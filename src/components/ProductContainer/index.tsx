import { View, Text } from "react-native";
import React from "react";
import ProductItem from "../ProductItem/index";
import productsGetir from "../../../assets/productsGetir";

const ProductContainer = () => {
  return (
    <View>
      {/* 2 products */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingBottom: 10,
        }}
      >
        {productsGetir.slice(0, 3).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text
        style={{ color: "gray", fontWeight: "bold", padding: 14, fontSize: 15 }}
      >
        Çubuk
      </Text>

      {/* below products */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          backgroundColor: "#fff",
          paddingVertical: 10,
          alignItems: "center",
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;
