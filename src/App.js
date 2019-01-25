import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
            <Switch>
              <Route path="/" component={ProductList} exact/>
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
