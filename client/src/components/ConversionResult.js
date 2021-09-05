import React, { useState, useEffect } from 'react';
import styles from './ConversionResult.module.css';

function ConversionResult({ value, update }) {
    const [result, updateResult] = useState(value);
    useEffect(() => {
        updateResult(value);
    }, [value]);
    return (
        <fieldset className={styles.field}>
            <label>Conversion Result: </label>
            <p>{result}</p>
        </fieldset>
    );
}

export default ConversionResult;
