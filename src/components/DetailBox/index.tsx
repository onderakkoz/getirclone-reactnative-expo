import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

type DetailBoxProps = {
  quantity: string;
  name: string;
  price: number;
};
const DetailBox = ({ quantity, name, price }: DetailBoxProps) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        paddingVertical: 18,
      }}
    >
      <Text style={{ color: colors.purple, fontWeight: "bold", fontSize: 19 }}>
        <Text> {"\u20BA"}</Text>
        {price}
      </Text>
      <Text
        style={{
          color: "#000",
          fontWeight: "700",
          fontSize: 20,
          marginTop: 12,
        }}
      >
        {name}
      </Text>
      <Text style={{ color: "gray", fontWeight: "bold", marginTop: 6 }}>
        {quantity}
      </Text>
    </View>
  );
};

export default DetailBox;
