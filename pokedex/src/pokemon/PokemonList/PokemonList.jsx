import FlashMessage from "../../components/FlashMessage/FlashMessage";
import Spinner from "../../components/Spinner/Spinner";
import usePokemonList from "../../hooks/usePokemonList"

export default function PokemonList() {
    const { data, isLoading, error } = usePokemonList();
    return (
        isLoading ?
            <Spinner />
            :
            error ?
                <FlashMessage message={error.message} type="error" />
                :
                <ul>
                    <li>Lmao no Pokemon for you</li>
                </ul>
    )
}