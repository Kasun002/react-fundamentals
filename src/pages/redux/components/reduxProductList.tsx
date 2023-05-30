import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "../../../components/ProductList";
import { getProducts } from "../features/product/productAPI";
import { RootState, useAppDispatch } from "../store/store";

const ReduxProductList: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const data = useSelector(
        (state: RootState) => state.product.list.values
    );

    const isLoading = useSelector(
        (state: RootState) => state.product.list.isLoading
    );

    return (
        <ProductList isLoading={isLoading} data={data}></ProductList>
    );
};

export default ReduxProductList;