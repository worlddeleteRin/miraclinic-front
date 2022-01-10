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
    getStaffMembers = async() => {
        const { data } = await apiClient.get(
            "site/staff-members"
        );
        return data
    }
    requestCall = async ({name, phone}) => {
      console.log('call request call');
      const body = {
        "name": name,
        "phone": phone
      };
      await apiClient.post(
        "site/request-call",
        body
      );
      // return data
    }
}

const APISite = new APISiteClass()

export default APISite
