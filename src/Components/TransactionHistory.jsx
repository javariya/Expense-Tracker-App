import React, { useContext } from 'react';

import {GlobalContext} from '../Context/GlobalContext';

function TransactionHistory() {

    const {transactions} = useContext(GlobalContext);
    return (

        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plusValue">
                    Project 1
                    <span>$1000</span>
                    <button className="delete-btn">X</button>

                </li>
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