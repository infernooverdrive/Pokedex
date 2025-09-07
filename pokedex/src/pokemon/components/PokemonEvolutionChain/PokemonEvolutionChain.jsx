import './PokemonEvolutionChain.css';
import Spinner from '../../../components/Spinner/Spinner';
import FlashMessage from '../../../components/FlashMessage/FlashMessage';
import { getFullEvolutionChain } from '../../utils/evolutionTreeUtils';
import useEvolutionChain from '../../hooks/useEvolutionChain';
import { useMultipleSpeciesAndPokemon } from '../../hooks/useSpeciesAndPokemon';

export default function PokemonEvolutionChain({ evolutionChainUrl }) {

    const { data: chainData, isLoading: chainLoading, error: chainError } = useEvolutionChain(evolutionChainUrl, Boolean(evolutionChainUrl));

    const results = getFullEvolutionChain(chainData?.chain || []);

    const { data: evolutionPokemonData, isLoading: evolutionPokemonLoading, error: evolutionPokemonError } = useMultipleSpeciesAndPokemon(results, results.length > 1);

    if (chainLoading || evolutionPokemonLoading) return <Spinner />;

    if (chainError || evolutionPokemonError) return <FlashMessage message={chainError?.message || evolutionPokemonError?.message} type="error" />;

    const pokemonMap = new Map(
        evolutionPokemonData.map((poke) => [poke.species.name.toLowerCase(), poke])
    );

    const mergedData = results.map((result) => ({
        ...result,
        ...pokemonMap.get(result.name.toLowerCase()),
    }));
    console.log(mergedData);
    return <div className='evolution-info-container' >
        {results.length === 1 ?
            <p>This Pokémon doesn't evolve.</p> :
            <div>{mergedData.map(monData => (
                monData.base === null ? <p>{monData.species.names.find(name => name.language.name === "en").name}</p> : <div>
                    <span>{monData.details.trigger === "use-item" ? monData.details.item : monData.details.trigger === "level-up" ? monData.details.min_level : monData.details.trigger}</span>
                    <p>{monData.species.names.find(name => name.language.name === "en").name}</p>
                </div>
            ))}</div>
        }

    </div>
}