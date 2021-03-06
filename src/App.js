import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomersComponent from "./components/Customers.component";
import HeaderComponent from "./components/Header.component";
import FooterComponent from "./components/Footer.component";
import ProductsComponent from "./components/Products.components";
import AddCustomerComponents from "./components/AddCustomer.components";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                  <Switch>
                      <Route exact path="/" component={CustomersComponent}/>
                      <Route exact path="/customers" component={CustomersComponent}/>
                      <Route exact path="/products" component={ProductsComponent}/>
                      <Route exact path="/add-customer" component={AddCustomerComponents}/>




                  </Switch>
                </div>
                <FooterComponent/>
           </Router>
           </div>

    );
}

export default App;
