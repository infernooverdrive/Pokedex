import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../utils/fetchPokemonList";

export default function usePokemonList() {
    return useQuery({
        queryKey: ["pokemonList"],
        queryFn: fetchPokemonList,
        staleTime: 1000 * 60 * 5 // 5 minutes
    });
}