import { fetchData } from "../../utils/fetchData";
import useSingleQuery from "../../hooks/useSingleQuery";

export default function useEvolutionChain(url, enabled = true) {
    return useSingleQuery(
        ["evolutionChain", url],
        async () => await fetchData(url),
        Infinity,
        1000 * 60 * 60,
        enabled
    )
}