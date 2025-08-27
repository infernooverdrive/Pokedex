import './InputField.css';
import { useState } from "react";
export default function InputField(props) {
    const [isFocused, setIsFocused] = useState(false);
    const types = ["number", "text", "date", "password", "email"];
    const type = props.type.toLowerCase();
    const isTextArea = type === "textarea";
    if (!types.includes(type) && !isTextArea)
        return null;

    return <div className="input-field-container">
        <label htmlFor={props.id} className="input-field-label">{props.label}</label>
        {!isTextArea ?
            <input
                type={type}
                className="input-field"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                placeholder={props.placeholder}
                onBlur={() => setIsFocused(true)}
            />
            :
            <textarea
                className="input-field"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />}
        {props.error && isFocused ? <div className="text-danger">{props.error}</div> : null}
    </div>
};