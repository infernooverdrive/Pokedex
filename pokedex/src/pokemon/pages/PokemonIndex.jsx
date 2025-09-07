import PokemonList from "../components/PokemonList/PokemonList";
import Spinner from "../../components/Spinner/Spinner";
import FlashMessage from "../../components/FlashMessage/FlashMessage";
import PokemonFilter from "../components/PokemonFilter/PokemonFilter";
import { createHandleChange } from '../../utils/createHandleChange'
import { useState } from "react";
import usePokemonSpecies from "../hooks/usePokemonSpecies";
import { useMultipleTypes } from "../hooks/useType";
import { useGeneration } from "../../generation/hooks/useGeneration";
import './PokemonIndex.css';

export default function PokemonIndex() {
    const [values, setValues] = useState({
        search: '',
        generation: 1,
        types: {
            NORMAL: false,
            FIRE: false,
            WATER: false,
            GRASS: false,
            ELECTRIC: false,
            ICE: false,
            FIGHTING: false,
            POISON: false,
            GROUND: false,
            FLYING: false,
            PSYCHIC: false,
            BUG: false,
            ROCK: false,
            GHOST: false,
            DRAGON: false,
            DARK: false,
            STEEL: false,
            FAIRY: false,
        }
    });
    const handleChange = createHandleChange(setValues);

    const { data: speciesListData, isLoading: speciesListLoading, error: speciesListError } = usePokemonSpecies(0, 1025);

    const search = values.search.toLowerCase();

    const selectedTypes = Object.keys(values.types).filter(type => values.types[type]);

    const { data: typesData, isLoading: typesLoading, error: typesError } = useMultipleTypes(selectedTypes);

    const { data: generationData, isLoading: generationLoading, error: generationError } = useGeneration(values.generation, values.generation !== 0);

    if (speciesListLoading || typesLoading || (generationLoading))
        return <div className="pokemon-index-container">
            <div className="sidebar">
                <div className="filter-container">
                    <PokemonFilter values={values} handleChange={handleChange} />
                </div>
            </div>
            <div className="list-container">
                <Spinner />
            </div>

        </div>;

    if (speciesListError || typesError || generationError)
        return <div className="pokemon-index-container">
            <div className="sidebar">
                <div className="filter-container">
                    <PokemonFilter values={values} handleChange={handleChange} />
                </div>
            </div>
            <div className="list-container">
                <FlashMessage message={speciesListError?.message || typesError?.message || generationError?.message} type="error" />;
            </div>

        </div>;



    const filteredList = ([...speciesListData.results ?? []]).filter(p => {
        const matchesSearch = search === ""
            ? true
            : p.name.toLowerCase().includes(search);


        const matchesTypes = selectedTypes.length === 0
            ? true
            : typesData.some(type =>
                type.pokemon.some(t => t.pokemon.name.includes(p.name))
            );

        const matchesGeneration = values.generation === 0
            ? true
            : generationData?.pokemon_species.some(sp => sp.name === p.name.toLowerCase()) ?? false;


        return matchesTypes && matchesSearch && matchesGeneration;
    });

    return <div className="pokemon-index-container">
        <div className="sidebar">
            <div className="filter-container">
                <PokemonFilter values={values} handleChange={handleChange} />
            </div>
        </div>
        <div className="list-container">
            <PokemonList pokemonList={filteredList} />
        </div>

    </div>
}