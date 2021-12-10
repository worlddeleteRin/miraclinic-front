import apiClient from './api_client';

class APISiteClass {
    getCommonInfo = async() => {
        const { data } = await apiClient.get(
            "site/common-info"
        );
        return data
    }
    getHeaderLinks = async() => {
        const { data } = await apiClient.get(
            "site/header-links"
        );
        return data
    }
    getStocks = async() => {
        const { data } = await apiClient.get(
            "site/stocks"
        );
        return data
    }
    getMainSlider = async() => {
        const { data } = await apiClient.get(
            "site/main-slider"
        );
        return data
    }
}

export const APISite = new APISiteClass()
