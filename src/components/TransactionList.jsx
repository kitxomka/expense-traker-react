import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';


// Get ALL Transactions 

const TransactionList = () =>  {

const { transactions } = useContext(GlobalContext);


const transactionsHtml = transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactionsHtml} 
            </ul>
        </>
    )
}

export default TransactionList
