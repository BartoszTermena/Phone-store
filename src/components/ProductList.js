import React, { Component, Fragment } from 'react';
import { storeProducts } from '../data';
import Product from './Product';
import Title from './Title';

class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
            
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}
export default ProductList;