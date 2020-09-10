import React from 'react';

const incomeStyle = {
    
    

};

function AccountSummary() {
    return (
        <div className= "account-summary-container">
        <div>
            <h3 style = {incomeStyle}>INCOME</h3>
            <p className="addIncome"style = {{color: "green"}}>$0.00</p>
        </div>
        <div>
        
            <h3><span>EXPENSE</span></h3>
            <p className="minusExpense"style= {{color: "red"}}>$0.00</p>
            
        </div>
        </div>
    )
}
export default AccountSummary;