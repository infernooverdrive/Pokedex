import './InputCheck.css';

export default function InputCheck(props) {
    const { id, name, value, onChange, label, required, error } = props;
    return (
        <div className="input-check-container">
            <input
                type="checkbox"
                className={`input-check ${name}`}
                id={id}
                name={name}
                checked={value}
                onChange={onChange}
                required={required}
            />
            <label className={`input-check-label ${name}`} htmlFor={id}>{label}</label>
            {error && <div className="text-danger">{error}</div>}
        </div>
    );
}