import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { useFirebaseAuth } from "use-firebase-auth"

const TransactionList = ()=> {
    const { transactions, getTransactions } = useContext(GlobalContext);
    const { user } = useFirebaseAuth()
    console.log (user)
    useEffect(() => {
        getTransactions();
    }, []);console.log(document.querySelector("#total"))

    return (
        <>
        <h4>History</h4>
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction= {transaction} />))}
        </ul> 
        </>
    )
}

export default TransactionList