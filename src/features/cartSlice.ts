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
      state.map((product) => {
        if (product.id === action.payload && product.quantity) {
          return (product.quantity += 1);
        } else {
          return product;
        }
      });
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      state.map((product) => {
        if (product.id === action.payload && product.quantity) {
          return (product.quantity -= 1);
        } else {
          return product;
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;
