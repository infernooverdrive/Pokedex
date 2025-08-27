import FlashMessage from "../../components/FlashMessage/FlashMessage";
import Spinner from "../../components/Spinner/Spinner";


export default function PokemonList({ pokemonList, isLoading, error }) {
    return (
        isLoading ?
            <Spinner />
            :
            error ?
                <FlashMessage message={error.message} type="error" />
                :
                <ul>
                    {pokemonList.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))}
                </ul>
    )
}