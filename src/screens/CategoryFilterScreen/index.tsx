import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering/index";
import { Category } from "../../models";
import TypeFiltering from "../../components/TypeFiltering/index";

import ProductContainer from "../../components/ProductContainer/index";

const Index = (props: any) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />

      <ProductContainer />
    </ScrollView>
  );
};

export default Index;
