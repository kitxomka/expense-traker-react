import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions:[
         { id: 1, text: 'Flower', amount: -100 },
         { id: 2, text: 'Salary', amount: 6000 },
         { id: 3, text: 'Book', amount: -50 },
         { id: 4, text: 'Camera', amount: -2000 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider component
// childern - it's the components that the provider wraps
export const GLobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }



    return(
        <GlobalContext.Provider 
            value={{ 
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}