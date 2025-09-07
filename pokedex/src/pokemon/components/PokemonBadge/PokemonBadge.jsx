import './PokemonBadge.css';

export default function PokemonBadge({ message, type }) {
    return <div className={`pokemon-badge ${type}`}>
        {message}
    </div>
}