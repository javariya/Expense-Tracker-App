import React from 'react';
import './App.css';
import Heading from  './Components/header.jsx';
import TotalBalance from './Components/balance';
import AccountSummary from './Components/accountSummary';

function App() {
  return (
    <div className= "App">
      <Heading />
      <div className ="balance">
      <TotalBalance />
      </div>
      <div className="AccountSummary">
      <AccountSummary />
      </div>
     
    </div>
    
       
  );
}

export default App;
