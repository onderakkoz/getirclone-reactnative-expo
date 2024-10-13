import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../CategoryItem/index";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

//MainCategories
const Index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default Index;
