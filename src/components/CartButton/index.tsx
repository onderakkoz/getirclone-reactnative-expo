import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/CartActions";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};
const CartButton = ({ item, addItemToCart }: cartButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: height * 0.1,
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#5D39C1",
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.06,
          justifyContent: "center",
          width: "88%",
          marginHorizontal: "6%",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ product, quantity: 1 })),
  };
};

export default connect(null, mapDispatchToProps)(CartButton);
