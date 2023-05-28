import { useEffect, useState } from "react";
import { fetchProducts } from "../services/ProductService";

const useFetchProducts = (url?: string, options?: {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const apiData = await fetchProducts();
                setData(apiData);
                setError(null);
            } catch (error: any) {
                setData([]);
                setError(error);
            }
        }
        fetchData();
    }, [url, options])

    return { isLoading, data, error };
}

export default useFetchProducts;