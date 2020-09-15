import React, {useState, useContext} from "react"
import { GlobalContext } from "../context/GlobalState";
import { useFirebaseAuth } from "use-firebase-auth"

const AddTransaction = () => {
    const [name, setText] = useState ("");
    const [value, setAmount] = useState (0);
    const {addTransaction } = useContext(GlobalContext);
    const { user } = useFirebaseAuth()
    console.log(user);
    const onSubmit = e => {
        e.preventDefault();
    const newTransaction ={
        _id: Math.floor(Math.random() * 100000000),
        name,
        value: +value,
        userId: user.uid
    }
    addTransaction(newTransaction);
    }

    return (
        <>
        <h4>Add New Transaction</h4>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label className="white-text text-lighten-3" htmlFor="text"><h5>Transaction Name </h5></label>
                <input className="white-text text-lighten-3" type="text" value={name} onChange={(e) => setText(e.target.value)} placeholder="Enter text... " />
            </div>
            <div className="form-control">
                <label className="white-text text-lighten-3" htmlFor="amount"><h5>Amount</h5>< br />
                (negative - expense, positive - income)</label>
                <input className="white-text text-lighten-3" type="number" value={value} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..."/>
            </div>
            <button className="white-text text-lighten-3" className="btn">Add Transaction</button>
        </form>
        </>
    )
}

export default AddTransaction