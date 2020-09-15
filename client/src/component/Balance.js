import React, {useContext} from "react"
import { GlobalContext } from "../context/GlobalState";


function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.value);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return(
        <div>
            <h4>Your Balance</h4>
            <h5 id='total'>${total}</h5> 
        </div>
    )
}

export default Balance