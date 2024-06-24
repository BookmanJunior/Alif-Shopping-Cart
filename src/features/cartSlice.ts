import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Types/Product";
import { CartProduct } from "../Types/CartProduct";

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product: CartProduct = { ...action.payload, quantity: 1 };
      state.push(product);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
    incrementProductQuantity: (state, action: PayloadAction<number>) => {
      const currentProduct = state.find(
        (product) => product.id === action.payload,
      );

      if (currentProduct) {
        currentProduct.quantity += 1;
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      const currentProduct = state.find(
        (product) => product.id === action.payload,
      );

      if (currentProduct) {
        currentProduct.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;
