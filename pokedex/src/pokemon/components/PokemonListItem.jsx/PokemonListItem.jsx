import { Link } from "react-router-dom";
import './PokemonListItem.css';

export default function PokemonListItem({ pokemon, species }) {
    const pokemonName = species.names.find(name => name.language.name == "en").name;
    return <Link to={`/pokemon/details/${species.name}`} className={`pokemon-list-item ${pokemon.types[0].type.name}`} key={pokemon.id}>
        <p className="pokemon-dex-number">#{species.pokedex_numbers.find(pn => pn.pokedex.name == "national").entry_number}</p>
        <p className='pokemon-name'>{pokemonName}</p>
        <div className="pokemon-sprite-container">
            <img className='pokemon-sprite' src={pokemon.sprites.other.home.front_default} />
            <div className={`pokeball-graphics ${pokemon.types[0].type.name}`}>
                <div className="pokeball-graphics-center"></div>
            </div>
        </div>
    </Link>
}