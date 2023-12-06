import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// In this code, getProducts is an endpoint defined using Redux Toolkit Query’s builder.query method. 
// When you call getProducts, it will run the query specified in the query field, which in this case is to send a GET request to the URL specified by PRODUCTS_URL. 
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetProductsQuery } = productsApiSlice;