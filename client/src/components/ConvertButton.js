import React, { useState, useEffect } from 'react';
import styles from './ConvertButton.module.css';

function ConvertButton({ fetching }) {
    const [isFetching, setIsFetching] = useState(fetching);
    useEffect(() => {
        setIsFetching(fetching);
    }, [fetching]);
    return isFetching ? (
        <button className={styles.button} type="submit" disabled>
            Convert <i className="fas fa-circle-notch fa-spin"></i>
        </button>
    ) : (
        <button className={styles.button} type="submit">
            Convert
        </button>
    );
}

export default ConvertButton;
