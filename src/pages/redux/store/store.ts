import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
    reducer: {
        product: productSlice
    },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>