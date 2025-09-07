export function buildQueryConfig({ key, fn, staleTime, cacheTime, enabled = true }) {
    return {
        queryKey: [key],
        queryFn: fn,
        staleTime,
        cacheTime,
        enabled,
    }
}