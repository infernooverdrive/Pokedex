import './PokemonFilter.css';
import InputField from '../../components/InputField/InputField';
import Form from '../../components/Form/Form';


export default function PokemonFilter({ values, handleChange }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <Form onSubmit={handleSubmit}>
        <InputField
            type="text"
            id="search"
            name="search"
            value={values.search}
            onChange={handleChange}
            required={false}
            placeholder="Pikachu"
            label="Search" />
        {/*<button className='filter-btn'>Search</button>*/}
    </Form>
}