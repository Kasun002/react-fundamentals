import { useEffect, useState } from "react";
import { fetchProducts } from "../services/ProductService";
import { IProduct } from "../interfaces/IProduct";

const useFetchProducts = (url?: string, options?: {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<IProduct[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const apiData = await fetchProducts();
                setData(apiData.data);
                setError(null);
                setIsLoading(false);
            } catch (error: any) {
                setData([]);
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url, options])

    return { isLoading, data, error };
}

export default useFetchProducts;