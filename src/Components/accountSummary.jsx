import React from 'react';

const incomeStyle = {
    
    

};

function AccountSummary() {
    return (
        <div>
            <h3 style = {incomeStyle}>INCOME</h3>
            <p style = {{color: "green"}}>$0.00</p>
            <h3><span>EXPENSE</span></h3>
            <p style= {{color: "red"}}>$0.00</p>
            
        </div>
    )
}
export default AccountSummary;