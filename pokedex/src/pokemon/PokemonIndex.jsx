import PokemonList from "./PokemonList/PokemonList";
import useItem from '../hooks/useItem'
import { fetchData } from '../utils/fetchData'
import Spinner from "../components/Spinner/Spinner";
import FlashMessage from "../components/FlashMessage/FlashMessage";
import PokemonFilter from "./PokemonFilter/PokemonFilter";
import { createHandleChange } from '../utils/createHandleChange'
import { useState } from "react";

export default function PokemonIndex() {
    const [values, setValues] = useState({
        search: ''
    });
    const handleChange = createHandleChange(setValues);


    const { data, isLoading, error } = useItem({
        key: "speciesList",
        fn: () => fetchData("https://pokeapi.co/api/v2/pokemon-species/?limit=1025"),
        staleTime: 1000 * 60 * 5
    });

    const search = values.search.toLowerCase();

    // Filter Pokémon before passing to the list
    const filteredList = data?.results
        .filter(p => p.name.toLowerCase().includes(search))
        .slice(0, 30) ?? [];

    return isLoading ?
        <Spinner />
        :
        error ?
            <FlashMessage message={error.message} type="error" />
            :
            <>
                <PokemonFilter values={values} handleChange={handleChange} />
                <PokemonList
                    pokemonList={filteredList}
                    isLoading={isLoading}
                    error={error} />
            </>
}