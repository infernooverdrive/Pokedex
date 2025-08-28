import { Link } from "react-router-dom";
import './PokemonListItem.css';

export default function PokemonListItem({ pokemon, species }) {
    const pokemonName = species.names.find(name => name.language.name == "en").name;
    return <Link to={`/pokemon/details/${pokemonName}`} className={`pokemon-list-item ${pokemon.types[0].type.name}`} key={pokemon.id}>
        <p className="pokemon-dex-number">#{species.order}</p>
        <p className='pokemon-name'>{pokemonName}</p>
        <img className='pokemon-sprite' src={pokemon.sprites.other.home.front_default} /></Link>
}