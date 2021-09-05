import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import ConversionInput from './ConversionInput';
import ConversionResult from './ConversionResult';

const urlBase = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/exchange`;
const incompleteFormMessage =
    'You need to choose a currency for both "From" and "To".';

function CurrencyConverter() {
    const [input, updateInput] = useState(1);
    const [currency1, updateCurrency1] = useState('');
    const [currency2, updateCurrency2] = useState('');
    const [result, updateResult] = useState('');
    const swapUnit = (event) => {
        event.preventDefault();
        const temp = currency1;
        updateCurrency1(currency2);
        updateCurrency2(temp);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (currency1 === '' && currency2 === '') {
            alert(incompleteFormMessage);
        } else {
            handleConversion();
        }
    };
    const handleConversion = async () => {
        try {
            const response = await fetch(
                `${urlBase}/${currency1}/${currency2}?value=${input}`
            );
            const data = await response.json();
            if (response.status !== 200) {
                console.error('Error:', data.message);
            } else {
                updateResult(data.convertedValue);
            }
        } catch (err) {
            console.error('Error:', err.message);
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <ConversionInput value={input} update={updateInput} />
            <fieldset>
                <CurrencySelector
                    label="From"
                    value={currency1}
                    update={updateCurrency1}
                />
                <input type="button" onClick={swapUnit} value="&#8644;" />
                <CurrencySelector
                    label="To"
                    value={currency2}
                    update={updateCurrency2}
                />
            </fieldset>
            <input type="submit" value="Convert" />
            <ConversionResult value={result} />
        </form>
    );
}

export default CurrencyConverter;
