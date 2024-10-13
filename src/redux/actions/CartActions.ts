import { Product } from "../../models";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants";

export const addToCart = (payload: any) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
