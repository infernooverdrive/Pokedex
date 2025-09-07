import { fetchData } from '../../utils/fetchData';
import useSingleQuery from '../../hooks/useSingleQuery';
import useMultipleQueries from '../../hooks/useMultipleQueries';

export function useType(type, enabled = true) {
    return useSingleQuery(
        `type-${type}`,
        async () => await fetchData(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`),
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}

export function useMultipleTypes(typeList, enabled = true) {
    const queries = typeList.map(typeName => ({
        key: ["type", typeName],
        fn: async () => await fetchData(`https://pokeapi.co/api/v2/type/${typeName.toLowerCase()}`)
    }));
    return useMultipleQueries(
        queries,
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}