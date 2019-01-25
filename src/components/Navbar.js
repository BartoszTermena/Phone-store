import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo}  
          className="navbar-brand"
          alt="logo"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/products" className="nav-link">
            products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus"></i>My Cart
          </button>
        </Link>
      </nav>
    )
  }
}
export default Navbar