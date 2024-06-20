import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../Types/Product";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getProduct: builder.query<Product, string | undefined>({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
} = apiSlice;
