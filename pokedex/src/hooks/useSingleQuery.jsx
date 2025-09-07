import { buildQueryConfig } from "../pokemon/utils/buildQueryConfig";
import { useQuery } from "@tanstack/react-query";

export default function useSingleQuery(key, fn, staleTime, cacheTime, enabled = true) {
    const query = buildQueryConfig({
        key: key,
        fn: fn,
        staleTime: staleTime,
        cacheTime: cacheTime,
        enabled: enabled
    });

    const { data, isLoading, error } = useQuery(query);

    return {
        data,
        isLoading,
        error: error?.message ?? null
    };
}