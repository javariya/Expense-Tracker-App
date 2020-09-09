import React, { useReducer, createContext} from 'react';

//importing AppReducer 
import AppReducer from './AppReducer'

//creating the initial state

const initialState = {

    transactions: [
        {id: 1, description: "income 1", transactionAmount: 1000},
        {id: 2, description: "Expense 1", transactionAmount: -100},
        {id: 3, description: "income 2", transactionAmount: 2000},
        {id: 4, description: "Expense 2", transactionAmount: -1000}
    ]
}

//creating the global context so the app has access to the above data

export const GlobalContext= createContext(initialState);

//creating a provider for GlobalContext so that all components could use it

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value= {
            {
                transactions: state.transactions
            }
        } >
            {children}
        </GlobalContext.Provider>

    )
}