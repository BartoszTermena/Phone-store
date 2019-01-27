import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context';


class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
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
        <ProductConsumer>
        {(value) => {
          const {cart} = value;
          console.log(cart)
          if(cart.length ==0 ){
          return (
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <i className="fas fa-cart-plus"></i> My Cart
             
            </ButtonContainer>
          </Link>
          )} else {
            return (
              <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <i className="fas fa-cart-plus stuff-incart"></i> My Cart
              </ButtonContainer>
            </Link>
            )
          }
        }}
        </ProductConsumer>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  background: var(--primary-color);
  .nav-link {
    color: var(--secondary-color) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar