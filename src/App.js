import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './StockManagement/Home'
import Navbar from './StockManagement/Navbar';
import Footer from './StockManagement/Footer';

import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom'
import Stocks from './StockManagement/Stocks';
import Positions from './StockManagement/Positions';
import Funds from './StockManagement/Funds';
import Filter from './StockManagement/Filter'
import AtFirst from './StockManagement/AtFirst';

function App() {
  
  return (
    <div className="App">
      

      <Router>
       
        <Navbar></Navbar>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stocks" exact component={Stocks} />
        <Route path="/positions" exact component={Positions} />
        <Route path="/filter" exact component={Filter} />
        <Route path="/atfirst" exact component={AtFirst} />
        <Route path="/funds" exact component={Funds} />
        </Switch>
        <Footer></Footer>
        
      </Router> 
     
    </div>
  );
}

export default App;
