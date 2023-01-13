import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

function Services() {
  return (
   <Carousel autoPlay infiniteLoop>
    <div>
        <img src={img1} alt="item1" />
        <p className='legend'>React js</p>
    </div>
    <div>
        <img src={img2} alt="item2" />
        <p className='legend'>Full Stack</p>
    </div>
   </Carousel>
  )
}

export default Services