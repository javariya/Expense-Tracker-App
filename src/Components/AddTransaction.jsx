import React, {useState} from 'react';

function AddTransaction() {

    const [description, setDescription]= useState();
    const [transactionAmount, setTransactionAmount]= useState();

    return(
        <div>
            <h3> Add New Transaction</h3>
            <form>
                <div>
                    <label htmlFor='description'> Description</label>
                    <input type="text" id="description" placeholder="describe purpose of transaction" value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="amount"> Amount</label>
                    <input type="number" id="amount" placeholder="Enter Your Amount" value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}/>
                </div>
                <button className="Add-btn"> Add Transaction</button>
            </form>
        </div>

    );
}

export default AddTransaction;