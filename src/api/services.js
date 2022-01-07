import apiClient from './api_client';

class APIServicesClass {
    getCategories = async() => {
        const { data } = await apiClient.get(
            "services/categories",
        );
        return data
    }
    getCategory = async(categoryId) => {
        console.log('category id is', categoryId);
        const { data } = await apiClient.get(
            `services/categories/${categoryId}`,
        );
        return data
    }
    getServices = async(params) => {
        const { data } = await apiClient.get(
            "services/",
            { params: params }
        );
        return data
    }
}

export const APIServices = new APIServicesClass()
