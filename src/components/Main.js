import React, { Component, Fragment } from 'react'
import CarouselSlider from "react-carousel-slider";
import Title from './Title';
import Carousel from './Carousel';
import Opinions from './Opinions';

class Main extends Component {
  render() {
    return (
        <Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="Welcome"/>
              <Carousel />
              <Opinions />
              </div>
              </div>
          <footer class="footer">
          <div class="container">
          <div class="row ">
            <div class="col-sm ">
              Useful Info
            </div>
            <div class="col-sm">
              Contact
            </div>
            <div class="col-sm">
              We Accept
            </div>
            <div class="w-100"></div>
            <div class="col-sm text-footer text-muted">
            Terms and Conditions
            <br />
            Privacy Policy
            <br />
            Product Information
            <br />
            FAQ
            <br />
            </div>
            <div class="col-sm text-footer text-muted">
              Email@gmial.com
              <br />
              Telephone: 0111 111 1111
              <br />
              Office Hours: Mon-Fri  9.30am-5.30pm
            </div>
            <div class="col-sm text-footer text-muted">
            <i class="fab fa-cc-paypal fa-2x mr-2"></i>
            <i class="fab fa-cc-visa fa-2x mr-2"></i>
            <i class="fab fa-cc-mastercard fa-2x"></i>
            </div>
          </div>
          </div>
        </footer>
        </Fragment>
    )
  }
}

export default Main;