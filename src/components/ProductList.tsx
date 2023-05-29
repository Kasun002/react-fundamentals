import React from 'react';
import useFetchProducts from '../hooks/useProducts';
import './css/_list.css';
import PageLoader from './PageLoader';

const ProductList: React.FC = () => {
    const { isLoading, data, error } = useFetchProducts();

    return (
        <>{isLoading ? <PageLoader /> : error ? <div>{error || JSON}</div> : (<>
            <h2>Product List (Got data from the API)</h2>
            <div className="user-list">
                {data.map((product, index) => // Repeat list items using the map function
                    <div key={`user-${index}`} className="user-list__item">
                        <div className="user-list__name">Product Name: {product.name}</div>
                        <div className="user-list__address">Product Type: {product.brewery_type}</div>
                        <div className="user-list__country"> Product URL: <a href={product.website_url}>{product.website_url}</a></div>
                    </div>
                )}
            </div>
        </>)}
        </>
    );
};

export default ProductList;