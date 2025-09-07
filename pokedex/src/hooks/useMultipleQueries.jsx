import { useQueries } from "@tanstack/react-query";
import { buildQueryConfig } from "../pokemon/utils/buildQueryConfig";
import useAggregatedQueries from "./useAggregatedQueries";

export default function useMultipleQueries(
    arr,
    staleTime,
    cacheTime,
    enabled = true
) {
    const queries = arr.map(item =>
        buildQueryConfig({
            key: item.key,
            fn: item.fn,
            staleTime,
            cacheTime,
            enabled,
        })
    );

    const results = useQueries({ queries });

    return useAggregatedQueries(results);
}
