import React from "react";
import ProductList from "../components/ProductList";
import useFetchProducts from "../hooks/useProducts";

const ProductPage: React.FC = () => {
    const { isLoading, data, error } = useFetchProducts();
    return (
        <ProductList isLoading={isLoading} data={data} error={error} />
    )
}

export default ProductPage;