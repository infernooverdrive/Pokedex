import './PokemonDetails.css';
import { useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import { getPokemonQuery } from '../getPokemonQuery';
import Spinner from '../../components/Spinner/Spinner';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

export default function PokemonDetails() {
    const { name } = useParams();

    const { data, isLoading, error } = useItem({
        key: ["speciesAndPokemon", name],
        fn: () => getPokemonQuery(name),
        staleTime: 1000 * 60 * 5
    });
    if (isLoading) return <Spinner />;

    if (error) return <FlashMessage message={error.message} type="error" />;

    const { pokemon, species } = data;
    console.log(data)
    return <div className='pokemon-details-container'>
        {species.isLegendary ? <p>LEGENDARY</p> : <p>Sad boi</p>}
        <ProgressBar maximum={255} actual={pokemon.stats[0].base_stat} />
    </div>
}