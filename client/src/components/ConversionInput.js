import React, { useState, useEffect } from 'react';
import styles from './ConversionInput.module.css';

function ConversionInput({ value, update }) {
    const [input, updateInput] = useState(value);
    useEffect(() => {
        updateInput(value);
    }, [value]);
    const updateValue = (event) => {
        const newInput = event.target.value;
        updateInput(newInput);
        update(newInput);
    };
    return (
        <fieldset className={styles.field}>
            <label>Conversion Input: </label>
            <input
                type="number"
                step="0.01"
                min="0"
                value={input}
                onChange={updateValue}
            />
        </fieldset>
    );
}

export default ConversionInput;
