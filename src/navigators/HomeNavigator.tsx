import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../utils/colors";
import CategoryFilterScreen from "../screens/CategoryFilterScreen/index";
import ProductDetailScreen from "../screens/ProductDetailScreen/index";
import Entypo from "@expo/vector-icons/Entypo";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import CartScreen from "../screens/CartScreen/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import { connect } from "react-redux";
import { Product } from "../models";
import * as actions from "../redux/actions/CartActions";

const { width, height } = Dimensions.get("window");
const Stack = createStackNavigator();

const MyStack = ({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  navigation: any;
  route: any;
  cartItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) => {
  // sadece "ProductDetail" ekranında tabBar'ın gizlenmesi (vd:11)
  // React.useLayoutEffect: Ekran render edildikten hemen sonra çalışır ve tabBar'ın gizlenip gizlenmeyeceğini belirlemek için kullanılır.
  // tabHiddenRoutes Dizisi: Hangi ekranlarda tabBar'ın gizleneceğini belirler.
  // navigation.setOptions: Ekranlar arasında geçiş yapıldığında tabBar'ın gizlenmesi veya gösterilmesi için kullanılır.
  // getFocusedRouteNameFromRoute: Aktif olan ekranın adını alarak tabHiddenRoutes ile karşılaştırır.
  const tabHiddenRoutes = ["ProductDetail", "CartScreen"];
  const [totalPrice, setTotalPrice] = useState<number>(0);

  React.useLayoutEffect(() => {
    const routeName: string | undefined = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  const getProductPrice = () => {
    var total = 0;

    cartItems.forEach((cartItem) => {
      const price = (total += cartItem.product.fiyat);
      setTotalPrice(price);
    });
  };

  useEffect(() => {
    getProductPrice();
  }, [cartItems, navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: colors.purple },

          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{
                width: 70,
                height: 30,
              }}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerStyle: { backgroundColor: colors.purple },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,

          headerTitle: () => (
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/cart.png")}
                style={{ width: 23, height: 23, marginLeft: 6 }}
              />
              <View style={{ height: 33, width: 3, backgroundColor: "#fff" }} />

              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: "#F3EFEF",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: colors.purple,
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  <Text>{"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerStyle: { backgroundColor: colors.purple },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ padding: 12 }}
            >
              <Entypo name="cross" size={26} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ padding: 12 }}>
              <AntDesign name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.purple },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,

          headerTitle: () => (
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{ margin: 12 }}
            >
              <Ionicons name="trash-sharp" size={26} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

//statelerimizi propslara iletecek method
const mapStateToProps = (state: any) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  navigation: any;
  route: any;
  cartItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={clearCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
