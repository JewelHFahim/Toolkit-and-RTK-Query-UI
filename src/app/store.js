import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import { productApi } from "../features/api/productApi";
import authSlice from "../features/auth/authSlice";


const store = configureStore({
    reducer:{
        [productApi.reducerPath]: productApi.reducer,
        cart: cartSlice,
        filter: filterSlice,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productApi.middleware)
})

export default store;