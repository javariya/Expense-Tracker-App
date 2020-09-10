import React from 'react'

export const Transaction = ({transaction}) => {

    return (
        <li className="plusValue">
                    {transaction.description}
                    <span>{transaction.transactionAmount}</span>
                    <button className="delete-btn">X</button>

                </li>
    )
}