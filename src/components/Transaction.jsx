import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

// Get ONE transaction

function Transaction({ transaction }) {

    const { deleteTransaction } = useContext(GlobalContext);

    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <>
            {/*  Add class based on value and add the transaction */}
            <li className={transaction.amount < 0 ? 'minus': 'plus'}>
                {transaction.text}
                {/* Math.abs(transaction.amount) - it's for not geting the 'minus' sign twise, we make the manber absolut that olways a positive */}
                <span>{sign}{Math.abs(transaction.amount)}₪</span>
                <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li> 
        </>
    )
}

export default Transaction
