import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../Types/Product";

const initialState: Product[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
