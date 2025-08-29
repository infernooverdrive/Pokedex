import { fetchData } from "../../utils/fetchData";

export async function getPokemonQuery(nameOrSpeciesUrl) {
    let speciesData;
    if (nameOrSpeciesUrl.startsWith("http"))
        speciesData = await fetchData(nameOrSpeciesUrl);
    else
        speciesData = await fetchData(`https://pokeapi.co/api/v2/pokemon-species/${nameOrSpeciesUrl}`);

    const defaultVariety = speciesData.varieties.find(v => v.is_default);
    const pokemonData = defaultVariety
        ? await fetchData(defaultVariety.pokemon.url)
        : null;

    return {
        species: speciesData,
        pokemon: pokemonData
    };
};