import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAPI";
import { IProduct } from "../../../../interfaces/IProduct";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        list: {
            isLoading: false,
            status: "",
            values: [] as IProduct[]
        }
    },
    reducers: {
        clearSuccessMessage: (state, payload) => {
            // TODO: Update state to clear success message
        }
    },
    extraReducers: {
        [getProducts.pending.type]: (state, action) => {
            state.list.status = "pending"
            state.list.isLoading = true
        },
        [getProducts.fulfilled.type]: (state, { payload }) => {
            state.list.status = "success"
            state.list.values = payload
            state.list.isLoading = false
        },
        [getProducts.rejected.type]: (state, action) => {
            state.list.status = "failed"
            state.list.isLoading = false
        }
    }
})

export default productSlice.reducer
