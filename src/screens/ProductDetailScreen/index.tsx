import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel/index";

import { colors } from "../../utils/colors";
import DetailBox from "../../components/DetailBox/index";
import DetailProperty from "../../components/DetailProperty/index";
import CartButton from "../../components/CartButton/index";

export default function ProductDetailScreen(props: any) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  console.log("product=>>>>>", product);

  if (!product) {
    return <ActivityIndicator color={colors.purple} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: "#808B99",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CartButton item={product} />
    </View>
  );
}
