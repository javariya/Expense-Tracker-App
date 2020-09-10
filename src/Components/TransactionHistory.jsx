import React, { useContext } from 'react';

import {GlobalContext} from '../Context/GlobalContext';
import {Transaction} from '../Components/transaction';

function TransactionHistory() {

    const {transactions} = useContext(GlobalContext);
    return (

        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
                <li className="minusValue">
                    Bill 1
                    <span>$200</span>
                    <button className="delete-btn">X</button>

                </li>

            </ul>
        </div>
    );

}

export default TransactionHistory;