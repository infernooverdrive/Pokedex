import { formatHeightImperial } from '../../utils/formatHeightImperial';
import { convertHectogramsToLbs } from '../../utils/convertHectogramsToLbs';
import './PokemonBasicInfo.css';

export default function PokemonBasicInfo({ pokemon, species }) {
    return <div className='basic-info-container'>
        <div className='basic-info-top'>
            <h3 className='pokemon-name'>{species.names.find(name => name.language.name == "en").name}</h3>
            <p className='pokemon-genera'>{species.genera.find(g => g.language.name == "en").genus}</p>
        </div>
        <div className='basic-info-bottom'>
            <p>Weight: {convertHectogramsToLbs(pokemon.weight)} lbs</p>
            <p>Height: {formatHeightImperial(pokemon.height)}</p>
        </div>
    </div>
}