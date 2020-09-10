import React, { useContext } from 'react';

import {GlobalContext} from '../Context/GlobalContext';
import {Transaction} from '../Components/transaction';

function TransactionHistory() {

    const {transactions} = useContext(GlobalContext);
    return (

        <div>
            <h3>Transaction History</h3>
            <li className="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
               

            </li>
        </div>
    );

}

export default TransactionHistory;