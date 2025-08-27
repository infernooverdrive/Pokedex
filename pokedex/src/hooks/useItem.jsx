import { useQuery } from "@tanstack/react-query";

export default function useItem({ key, fn, staleTime }) {
    return useQuery({
        queryKey: [key],
        queryFn: fn,
        staleTime: staleTime
    });
}