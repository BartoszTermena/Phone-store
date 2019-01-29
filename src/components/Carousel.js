import React, { Component, Fragment } from 'react'
import CarouselSlider from "react-carousel-slider";
import slide1 from '../slider/1.jpg'
import slide2 from '../slider/2.jpg'
import slide3 from '../slider/3.jpg'
import slide4 from '../slider/4.jpg'
import slide5 from '../slider/5.jpg'

class Main extends Component {
  render() {
    let sliderBoxStyle = {
        width: "95%",
        background: "transparent",
        border: "1px solid #e1e4e8"
    };

    let buttonSetting = {
        placeOn: "middle-inside",
        style: {
            left: {
                color: "#929393",
                background: "transparent",
                border: "1px solid #e1e4e8",
                borderRadius: "50%"
            },
            right: {
                color: "#929393",
                background: "transparent",
                border: "1px solid #e1e4e8",
                borderRadius: "50%"
            }
        }
    }

    let manner = {
        autoSliding: {interval: "3s"},
        duration: "3s"
    };

    let data = [
      {
          des: "Smart Phones on a Smart Budget",
          imgSrc: slide1
      },
      {
          des: "LG Nexus 5X 32GB",
          imgSrc: slide2
      },
      {
        des: "The Huawei P20 Lite",
        imgSrc: slide4
      },
      {
        des: "Best for iPhone X",
        imgSrc: slide5
      },
      {
        des: "Shop iPhone 7",
        imgSrc: slide3
    }
  ];
    return (
        <Fragment>
          <CarouselSlider 
          manner={manner}
          sliderBoxStyle = {sliderBoxStyle} 
          buttonSetting = {buttonSetting}
          slideItems = {data} />
        </Fragment>
    )
  }
}

export default Main;