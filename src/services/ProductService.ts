import { PRODUCT_LIST } from "../constants/ApiEndPoint";
import ApiService from "./APIService";

export const fetchProducts = async (): Promise<any> => {
    try {
        const response = await ApiService.get<any>(PRODUCT_LIST);
        console.log(response, 'output in product service')
        return response;
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};