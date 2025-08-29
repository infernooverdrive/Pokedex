import './PokemonEvolutionChain.css';

export default function PokemonEvolutionChain({ pokemon, species }) {
    const { data, isLoading, error } = useItem({
        key: ["speciesAndPokemon", species.evolves_from_species?.name],
        fn: () => getPokemonQuery(species.evolves_from_species?.name),
        staleTime: 1000 * 60 * 5,
        enabled: Boolean(species.evolves_from_species?.name)
    });
    if (isLoading) return <Spinner />;

    if (error) return <FlashMessage message={error.message} type="error" />;

    <div className='evolution-info-container'>
        {data && <div>
            <p>Evolves from: {data.species.names.find(name => name.language.name == "en").name}</p>
            <img src={data.pokemon.sprites.front_default} />
        </div>}
    </div>
}