import React from 'react'

export const Transaction = () => {

    return (
        <li className="plusValue">
                    {Transaction.description}
                    <span>{Transaction.transactionAmount}</span>
                    <button className="delete-btn">X</button>

                </li>
    )
}