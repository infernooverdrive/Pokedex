import './PokemonList.css';
import useItem from '../../hooks/useItem';
import Spinner from '../../components/Spinner/Spinner';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import PokemonListItem from '../PokemonListItem.jsx/PokemonListItem';
import { getPokemonQuery } from '../getPokemonQuery';

export default function PokemonList({ pokemonList }) {
    const pokemonQueries = pokemonList.map(pokemon => ({
        key: ["speciesAndPokemon", pokemon.name],
        fn: () => getPokemonQuery(pokemon.url)
    }))

    const results = useItem({ queries: pokemonQueries, staleTime: 1000 * 60 * 5 });

    // Aggregate state
    const isLoading = results.some(r => r.isLoading);
    const isError = results.some(r => r.isError);
    const errors = results.filter(r => r.isError).map(r => r.error?.message);

    if (isLoading) return <Spinner />;

    if (isError) return <FlashMessage message={errors.join(', ')} type="error" />;

    return (
        <ul className='pokemon-list'>
            {results.map(({ data }) => (
                <PokemonListItem key={data.pokemon.id} pokemon={data.pokemon} species={data.species} />
            ))}
        </ul>
    );
}
