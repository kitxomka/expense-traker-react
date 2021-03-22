import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

// Income VS Expense  ;)

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    // income - all the amounts that > 0, make a total and a whole number
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // expense - all the amounts that < 0, make total and a whole number
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1).toFixed(2);

    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">{income}₪</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">{expense}₪</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpenses
