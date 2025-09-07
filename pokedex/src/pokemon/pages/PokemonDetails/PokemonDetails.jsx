import './PokemonDetails.css';
import { useParams } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import FlashMessage from '../../../components/FlashMessage/FlashMessage';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { getFlattenedData } from '../../../utils/getFlattenedData';
import { isImageUrl } from '../../../utils/isImageUrl';
import { format } from '../../../utils/format';
import PokemonBasicInfo from '../../components/PokemonBasicInfo/PokemonBasicInfo';
import PokemonSprite from '../../components/PokemonSprite/PokemonSprite';
import PokemonEvolutionChain from '../../components/PokemonEvolutionChain/PokemonEvolutionChain';
import { useSpeciesAndPokemon } from '../../hooks/useSpeciesAndPokemon';

export default function PokemonDetails() {
    const { name } = useParams();

    const { data, isLoading, error } = useSpeciesAndPokemon(name);

    if (isLoading) return <Spinner />;

    if (error) return <FlashMessage message={error.message} type="error" />;

    const { pokemon, species } = data;

    const imageSprites = getFlattenedData(pokemon.sprites, isImageUrl);
    const stats = pokemon.stats.map((s) => ({
        label: s.stat.name,
        value: s.base_stat
    }));
    return <div className='pokemon-details-container'>
        <PokemonSprite sprites={imageSprites.filter(sprite => (
            sprite.path.includes("home")))} genderRate={species.gender_rate} type={pokemon.types[0].type.name} />
        <PokemonBasicInfo pokemon={pokemon} species={species} />
        <PokemonEvolutionChain evolutionChainUrl={species.evolution_chain.url} />
        {/*{species.is_legendary && <PokemonBadge type={"legendary"} message={"legendary"}></PokemonBadge>}*/}
        <div className='stats-container'>
            {stats.map((stat, index) => {
                const label = format(stat.label);
                return <ProgressBar key={index + 1} maximum={255} actual={stat.value} label={label} type={label} />
            })}
        </div>
    </div>
}