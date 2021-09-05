import React, { useState, useEffect } from 'react';

function ConversionResult({ value, update }) {
    const [result, updateResult] = useState(value);
    useEffect(() => {
        updateResult(value);
    }, [value]);
    return (
        result && (
            <fieldset>
                <label>Conversion Result: </label>
                <p>{result}</p>
            </fieldset>
        )
    );
}

export default ConversionResult;
