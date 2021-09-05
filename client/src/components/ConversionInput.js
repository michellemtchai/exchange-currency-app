import React, { useState, useEffect } from 'react';

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
        <fieldset>
            <label>Conversion Input: </label>
            <input
                type="number"
                step="0.01"
                value={input}
                onChange={updateValue}
            />
        </fieldset>
    );
}

export default ConversionInput;
