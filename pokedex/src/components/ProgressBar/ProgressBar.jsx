import './ProgressBar.css';

export default function ProgressBar({ maximum, actual, label, type }) {
    const valuePercent = (actual / maximum) * 100;
    console.log(type)
    return <>
        <div className={`progress-bar-label ${type}`}>{label}</div>
        <div className="progress-bar">
            <div style={{ width: `${valuePercent}%` }} className="progress-bar-fill"></div>
        </div>
    </>
}