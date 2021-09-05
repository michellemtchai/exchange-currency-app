import React from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import Attribution from './components/Attribution';

function App() {
    return (
        <div className="App">
            <p>Currency Converter</p>
            <header className="App-header">
                <CurrencyConverter />
                <Attribution />
            </header>
        </div>
    );
}

export default App;
