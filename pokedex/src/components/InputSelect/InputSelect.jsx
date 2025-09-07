import { useState } from 'react';
import './InputSelect.css';

export default function InputSelect(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="input-select-container">
            {props.label && <label htmlFor={props.id} className="input-select-label">{props.label}</label>}

            <select className="input-select"
                id={props.id} name={props.name}
                value={props.value} onChange={props.onChange}
                required={props.required}
                onBlur={() => setIsFocused(true)} >
                {props.options.map(option => (<option key={option.id} value={option.id}>{option.name}</option>))}
            </select>

            {isFocused &&
                props.error ?
                <div className="text-danger">{props.error}</div> : null}
        </div>);
}