import './PokemonFilter.css';
import InputField from '../../../components/InputField/InputField';
import Form from '../../../components/Form/Form';
import { PokemonTypes } from '../../utils/pokemonTypes';
import InputCheck from '../../../components/InputCheck/InputCheck';
import InputSelect from '../../../components/InputSelect/InputSelect';

export default function PokemonFilter({ values, handleChange }) {
    const generations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return <Form className="filter-form">
        <div className='search-container'>
            <InputField
                type="search"
                id="search"
                name="search"
                value={values.search}
                onChange={handleChange}
                required={false}
                placeholder="Search for a Pokémon..."
                className="input-field" />
        </div>
        <div className='generation-container'>
            <InputSelect
                id="generations"
                name="generation"
                required={false}
                options={generations.map(gen => ({
                    id: gen,
                    name: gen === 0 ? "None" : `GEN${gen}`
                }))}
                value={values.generation}

                onChange={handleChange}
            />
        </div>
        <div className='type-container'>
            {Object.entries(PokemonTypes).map(([key, value]) => (
                <div key={key} className='checkbox-wrapper'>
                    <InputCheck
                        name={`types.${value}`}
                        id={`types.${value}`}
                        value={values.types?.[value] || false}
                        onChange={handleChange}
                        required={false}
                        label={value}
                    />
                </div>
            ))}
        </div>
    </Form>
}