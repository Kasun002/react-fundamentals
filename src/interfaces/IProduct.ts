export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
}

export interface IProduct {
    id: string;
    name: string;
    brewery_type: string;
    address_1: string;
    address_2: string;
    address_3: string;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    longitude: string;
    latitude: string;
    phone: string;
    website_url: string;
    state: string;
}

export interface IProductDetailForm {
    name: string;
    price: string;
    description?: string;
}

export interface IProductList { 
    isLoading?: boolean;
    data?: IProduct[];
    error?: any;
}