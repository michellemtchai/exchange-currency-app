import React, { useState, useEffect } from 'react';
import options from './currency.json';

function CurrencySelector({ label, value, update }) {
    const [code, updateCode] = useState(value);
    useEffect(() => {
        updateCode(value);
    }, [value]);
    const changeSelected = (event) => {
        const newCode = event.target.value;
        updateCode(newCode);
        update(newCode);
    };
    return (
        <>
            <label>{label}: </label>
            <select onChange={changeSelected} value={code}>
                <option value="">Please choose a Currency</option>
                {options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.code} ({option.name})
                    </option>
                ))}
            </select>
        </>
    );
}

export default CurrencySelector;
