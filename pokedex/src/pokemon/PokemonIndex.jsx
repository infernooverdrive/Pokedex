import PokemonList from "./PokemonList/PokemonList";
import useItem from "../hooks/useItem";
import { fetchData } from '../utils/fetchData'
export default function PokemonIndex() {
    const { data, isLoading, error } = useItem({
        key: "pokemonList",
        fn: () => fetchData("https://pokeapi.co/api/v2/pokemon/?limit=1302"),
        staleTime: 1000 * 60 * 5
    });
    return <PokemonList
        pokemonList={data?.results ?? []}
        isLoading={isLoading}
        error={error} />
}