import { fetchData } from "../../utils/fetchData";
import useSingleQuery from "../../hooks/useSingleQuery";

export default function usePokemonSpecies(offset, limit, enabled = true) {
    return useSingleQuery(
        "speciesList",
        async () => await fetchData(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${limit}`),
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}