import './PokemonDetails.css';
import { useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import { getPokemonQuery } from '../getPokemonQuery';
import Spinner from '../../components/Spinner/Spinner';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import PokemonBadge from '../../components/PokemonBadge/PokemonBadge';
import Slideshow from '../../components/Slideshow/Slideshow';
import { getFlattenedData } from '../../utils/getFlattenedData';
import { isImageUrl } from '../../utils/isImageUrl';
import { format } from '../../utils/format';

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
    const imageSprites = getFlattenedData(pokemon.sprites, isImageUrl);
    const stats = pokemon.stats.map((s) => ({
        label: s.stat.name,
        value: s.base_stat
    }));
    return <div className='pokemon-details-container'>
        <Slideshow photos={imageSprites} />
        {species.is_legendary && <PokemonBadge type={"legendary"} message={"legendary"}></PokemonBadge>}
        <div className='stats-container'>
            {stats.map((stat, index) => {
                const label = format(stat.label);
                return <ProgressBar key={index + 1} maximum={255} actual={stat.value} label={label} type={label} />
            })}
        </div>
    </div>
}