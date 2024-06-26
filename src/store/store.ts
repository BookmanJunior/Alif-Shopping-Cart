import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import { cartSlice } from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
