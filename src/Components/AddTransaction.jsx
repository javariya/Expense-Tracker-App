import React from 'react';

function AddTransaction() {

    return(
        <div>
            <h3> Add New Transaction</h3>
            <form>
                <div>
                    <label htmlFor='description'> Description</label>
                    <input type="text" id="description" placeholder="describe purpose of transaction"/>
                </div>
                <div>
                    <label htmlFor="amount"> Amount</label>
                    <input type="number" id="amount" placeholder="Enter Your Amount"/>
                </div>
                <button className="Add-btn"> Add Transaction</button>
            </form>
        </div>

    );
}

export default AddTransaction;