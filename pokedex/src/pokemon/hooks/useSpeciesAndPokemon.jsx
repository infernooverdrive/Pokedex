
import { getPokemonQuery } from "../utils/getPokemonQuery";
import useSingleQuery from "../../hooks/useSingleQuery";
import useMultipleQueries from "../../hooks/useMultipleQueries";

export function useSpeciesAndPokemon(name, enabled) {
    return useSingleQuery(
        ["speciesAndPokemon", name],
        async () => await getPokemonQuery(name),
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}

export function useMultipleSpeciesAndPokemon(pokemonList, enabled = true) {
    const queries = pokemonList.map(pokemon => ({
        key: ["speciesAndPokemon", pokemon.name],
        fn: async () => await getPokemonQuery(pokemon.name)
    }));
    return useMultipleQueries(
        queries,
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}