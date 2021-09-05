import React, { useState, useEffect } from 'react';
import styles from './ErrorMessage.module.css';

function ErrorMessage({ value, update }) {
    const [error, setError] = useState(value);
    useEffect(() => {
        setError(value);
    }, [value]);
    const closeMessage = (event) => {
        event.preventDefault();
        setError('');
        update('');
    };
    return (
        error && (
            <div className={styles.error}>
                <p>Error: {error}</p>
                <button onClick={closeMessage}>&times;</button>
            </div>
        )
    );
}

export default ErrorMessage;
