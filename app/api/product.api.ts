import api from "@/lib/axios";

export const leadApi = {
  createLead: async (leadData: any) => {
    const response = await api.post(`/api/v1/auth/register`, leadData);
    return response.data;
  },
  productApi: async () => {
    const response = await api.post(`/api/v1/product/list`);
    return response.data;
  },
};  
