import { Product } from "../../models";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

const cartItems = (state = [], action: any, product: Product) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      //   console.log("==PAYLOAD=======>>>>>>>>>>" + action.payload);
      //   console.log("Action:", action);
      //   console.log("Payload:", action.payload); // Payload'ın doğru gelip gelmediğini kontrol et
      return state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
    case CLEAR_CART:
      return (state = []);
  }
  return state;
};

export default cartItems;
