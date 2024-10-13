import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/CartActions";

const { width, height } = Dimensions.get("window");

type ProductItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};
const ProductItem = ({ item, addItemToCart }: ProductItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
      style={{
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          elevation: 7,
          borderWidth: 0.03,
          borderColor: "lightgrey",
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: width * 0.28,
            height: width * 0.28,
            borderWidth: 0.3,
            borderColor: "gray",
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
        <Text style={{ fontSize: 17, color: "#5D3EBD", fontWeight: "bold" }}>
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 5 }}>
        {item.name}
      </Text>
      <Text style={{ color: "gray", fontWeight: "bold", marginTop: 4 }}>
        {item.miktar}
      </Text>

      <TouchableOpacity
        onPress={() => addItemToCart(item)}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          backgroundColor: "#fff",
          borderColor: "lightgray",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.07,
        }}
      >
        <Entypo name="plus" size={24} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ product, quantity: 1 })),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
