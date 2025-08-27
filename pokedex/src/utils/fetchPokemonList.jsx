import { apiGet } from "./apiRequest"
export async function fetchPokemonList() {
    try {
        const data = await apiGet("https://pokeapi.co/api/v2/pokemon/?limit=1302");
        return data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}