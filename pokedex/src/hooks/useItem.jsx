import { useQueries, useQuery } from "@tanstack/react-query";

export default function useItem({ key, fn, queries, staleTime, enabled = true }) {
    if (queries && Array.isArray(queries)) {
        return useQueries({
            queries: queries.map((q) => ({
                queryKey: [q.key],
                queryFn: q.fn,
                staleTime: q.staleTime ?? staleTime,
                enabled: q.enabled ?? true
            }))
        });
    } else {
        return useQuery({
            queryKey: [key],
            queryFn: fn,
            staleTime,
            enabled
        });
    }
}