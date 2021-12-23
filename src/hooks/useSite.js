import { useQuery
} from 'react-query';

import { APISite } from '@/api/site';


export function useCommonInfo () {
    return useQuery({
        queryKey: ["common-info"], 
        queryFn: APISite.getCommonInfo,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export function useHeaderLinks() {
    return useQuery({
        queryKey: ["header-links"], 
        queryFn: APISite.getHeaderLinks,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}
export function useMainSlider() {
  return useQuery({
        queryKey: ["main-slider"], 
        queryFn: APISite.getMainSlider,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
  })
}

export function useStocks() {
    return useQuery({
        queryKey: ["stocks"], 
        queryFn: APISite.getStocks,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export function useStaffMembers() {
    return useQuery({
        queryKey: ["staff-members"], 
        queryFn: APISite.getStaffMembers,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

