import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, title, img, price, company, info, inCart} = value.detailProduct;
          return (
            <div className="container-fluid py-5">
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-8 text-center text-blue">
                <img src={img} className="img-fluid" alt="product"/>
                </div>
    
              </div>
              <div className="w-100"></div>
              <div className="col-10 mx-auto col-md-6 my-3">
                <h4 className="mt-3 mb-2">Model: <span className="text-detail text-uppercase"> {title}</span></h4>
                <h4 className="mt-3 mb-2">Made By: <span className="text-detail text-uppercase"> {company}</span></h4>
                <h4 className="text-details">Price: <span className="text-detail text-uppercase">${price}</span></h4>
                <p className="text-capitalize text-info text-muted lead mt-3 mb-0">{info}</p>
                <div className="mt-3">
                  <Link to="/products">
                    <ButtonContainer>
                      Back To Products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  cart
                  disabled={inCart?true:false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id)
                  }}
                  >
                    {inCart?'inCart':'Add to cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
         
          )
        }}
      </ProductConsumer>
    )
  }
}
export default Details;