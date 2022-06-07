import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import ConversionInput from './ConversionInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';
import styles from './CurrencyConverter.module.css';

const urlBase =
    process.env.NODE_ENV === 'production'
        ? ''
        : `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
const incompleteFormMessage =
    'You need to choose a currency for both "From" and "To".';

function CurrencyConverter({ setError }) {
    const [input, updateInput] = useState(1);
    const [currency1, updateCurrency1] = useState('');
    const [currency2, updateCurrency2] = useState('');
    const [result, updateResult] = useState('N/A');
    const [fetching, updateFetching] = useState(false);
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
            updateFetching(true);
            console.log('URL', urlBase);
            const response = await fetch(
                `${urlBase}/exchange/${currency1}/${currency2}?value=${input}`
            );
            const data = await response.json();
            updateFetching(false);
            if (response.status !== 200) {
                setError(data.message);
            } else {
                updateResult(data.convertedValue);
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <ConversionInput value={input} update={updateInput} />
            <fieldset className={styles.currencyFields}>
                <CurrencySelector
                    label="From"
                    value={currency1}
                    update={updateCurrency1}
                />
                <input
                    className={styles.swapButton}
                    type="button"
                    onClick={swapUnit}
                    value="&#8644;"
                />
                <CurrencySelector
                    label="To"
                    value={currency2}
                    update={updateCurrency2}
                />
            </fieldset>
            <ConvertButton fetching={fetching} />
            <ConversionResult value={result} />
        </form>
    );
}

export default CurrencyConverter;
