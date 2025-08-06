import { leadApi } from "@/app/api/product.api";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useLeads = () => {
  const getUsers = useQuery({
    queryKey: ["users"],
    queryFn: leadApi.productApi,
  });

  const createLead = useMutation({
    mutationFn: (leadData: any) => leadApi.createLead(leadData),
    onSuccess: () => {
      console.log("Lead created successfully");
    },
    onError: (error) => {
      console.error("Error creating lead:", error);
    },
  });

  return { getUsers, createLead };    
};
