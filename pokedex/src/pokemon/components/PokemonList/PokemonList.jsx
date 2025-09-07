import './PokemonList.css';
import Spinner from '../../../components/Spinner/Spinner';
import FlashMessage from '../../../components/FlashMessage/FlashMessage';
import PokemonListItem from '../PokemonListItem.jsx/PokemonListItem';
import { useMultipleSpeciesAndPokemon } from '../../hooks/useSpeciesAndPokemon';

export default function PokemonList({ pokemonList }) {
    const { data, isLoading, error } = useMultipleSpeciesAndPokemon(pokemonList)

    if (isLoading) return <Spinner />;

    if (error) return <FlashMessage message={error} type="error" />;

    return data.length > 0 ?
        <ul className='pokemon-list'>
            {data.map(d => (
                <PokemonListItem key={d.pokemon.id} pokemon={d.pokemon} species={d.species} />
            ))}
        </ul>
        :
        <div className='not-found-container'>
            <p>No Pokémon meets your searching criteria, trainer.</p>
            <img className='not-found-pikachu' src="/misc-pics/crying-pika.png" />
        </div>;
}
