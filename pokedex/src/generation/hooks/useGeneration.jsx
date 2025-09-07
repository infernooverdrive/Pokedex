import useMultipleQueries from "../../hooks/useMultipleQueries";
import { fetchData } from "../../utils/fetchData"
import useSingleQuery from "../../hooks/useSingleQuery";

export function useGeneration(generation, enabled = true) {
    return useSingleQuery(
        `generation-${generation}`,
        async () => await fetchData(`https://pokeapi.co/api/v2/generation/${generation}`),
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}

export function useMultipleGenerations(generations, enabled = true) {
    const queries = generations.map(generation => ({
        key: ["generation", generation],
        fn: async () => await fetchData(`https://pokeapi.co/api/v2/generation/${generation}`)
    }));

    return useMultipleQueries(
        queries,
        Infinity,
        1000 * 60 * 60,
        enabled
    );
}