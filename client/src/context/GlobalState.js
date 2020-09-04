import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

//Initial state
const initialState ={
    transactions: [
        {}
    ]
}
// Create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/budget');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTransaction(transaction) {
        console.log(transaction)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/budget', transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteTransaction(id) {
        try{
            await axios.delete(`/api/budget/${id}`);
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });

        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        getTransactions,
        addTransaction,
        deleteTransaction
    }}> 
        { children } 
    </GlobalContext.Provider>);

}