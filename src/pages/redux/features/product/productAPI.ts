import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../../../services/ProductService";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
        const response = await fetchProducts();
        return response.data
    } catch (error) {
        console.log(error)
    }
});
