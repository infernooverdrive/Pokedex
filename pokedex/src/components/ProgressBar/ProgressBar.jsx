import './ProgressBar.css';
import { useState, useEffect } from 'react';

export default function ProgressBar({ maximum, actual, label, type }) {
    const [valuePercent, setValuePercent] = useState(0);
    const finalPercent = (actual / maximum) * 100;

    useEffect(() => {
        requestAnimationFrame(() => {
            setValuePercent(finalPercent)
        })
    }, [finalPercent])

    return <div className='progress-bar-container'>
        <div className={`progress-bar-label ${type}`}>{label}</div>
        <div className="progress-bar">
            <div style={{ width: `${valuePercent}%` }} className="progress-bar-fill"></div>
        </div>
        <div className='progress-bar-value-label'>{`${actual}/${maximum}`}</div>
    </div>
}