import React, { useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import CurrencyConverter from './components/CurrencyConverter';
import Attribution from './components/Attribution';

function App() {
    const [error, setError] = useState('');
    return (
        <div className="App">
            <p>Currency Converter</p>
            <header className="App-header">
                <ErrorMessage value={error} update={setError} />
                <CurrencyConverter setError={setError} />
                <Attribution />
            </header>
        </div>
    );
}

export default App;
