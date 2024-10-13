import { View, Text } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import CartButton from "../CartButton/index";

const DetailProperty = () => {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index == details.length - 1 ? 0 : 0.3,
          borderBottomColor: "lightgray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: index == 0 ? "#4E4E4E" : "#687482",
            fontWeight: index === 0 ? "500" : "600",
            fontSize: index === 0 ? 13 : 15,
          }}
        >
          {detail}
        </Text>
        {index != 0 && (
          <Feather name="chevron-down" size={24} color="#9F9F9F" />
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "white",
      }}
    >
      {details.map((item, index) => (
        <TextComponent key={index} detail={item} index={index} />
      ))}
    </View>
  );
};

export default DetailProperty;
