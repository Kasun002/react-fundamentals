import React from 'react';
import useFetchProducts from '../hooks/useProducts';

const ProductList: React.FC = () => {
    const {isLoading, data, error} = useFetchProducts();
    console.log(isLoading,data,error, 'Component level data')
    return (
        <div>

        </div>
    );
};

export default ProductList;