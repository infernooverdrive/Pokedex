import { useState, useEffect } from 'react';
import './FlashMessage.css';

export default function FlashMessage({ message, type, timeout = 50000000 }) {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible[false]
        });
        return () => clearTimeout(timer);
    }, [timeout]);

    if (!visible)
        return null;

    return <div className={`flash-message ${type}`}>
        <span className='message'>
            {message || "Pika-huh?"}
        </span>
        <button className='close-message-btn' onClick={() => setVisible(false)}>
            <img src='/misc-icons/close.png' />
        </button>
    </div>
}