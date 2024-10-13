import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 9,
        },
        item.name === active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 3,
        },
      ]}
    >
      <Text style={{ fontSize: 16, color: "#fff", fontWeight: "600" }}>
        {item.name}
      </Text>
    </View>
  );
};
const CategoryFiltering = ({ category }: { category: Category }) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;
