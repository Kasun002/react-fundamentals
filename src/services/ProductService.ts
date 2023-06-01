import { PRODUCT_LIST } from "../constants/ApiEndPoint";
import ApiService from "./APIService";

export const fetchProducts = async (): Promise<any> => {
    try {
        const response = await ApiService.get<any>(PRODUCT_LIST);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};

export const fetchUsers = async (page: number): Promise<any> => {
    try {
        const response = await ApiService.get<any>(`https://randomuser.me/api/?page=${page}&results=10&seed=03de891ee8139363`);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};