import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    // Update the balance
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>₪{total}</h1>
        </>
    )
}

export default Balance
