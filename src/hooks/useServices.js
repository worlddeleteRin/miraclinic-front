import { useQuery
} from 'react-query';

import { APIServices } from '@/api/services';

export function useCategories () {
    return useQuery({
        queryKey: ["categories"], 
        queryFn: APIServices.getCategories,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export function useServices(params) {
    return useQuery({
        queryKey: ["services"], 
        queryFn: () => APIServices.getServices(params),
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export function useCategory(categoryId) {
    return useQuery({
        queryKey: ['category/', categoryId], 
        queryFn: () => APIServices.getCategory(categoryId),
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: false,
        enabled: categoryId && categoryId.length > 0 &&
        categoryId != null && categoryId != undefined
    });
}



