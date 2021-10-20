import React from 'react';
import { Carousel } from 'react-bootstrap';

import images1 from "../../../images/Banner/img-1.jpg"
import images2 from "../../../images/Banner/img-2.jpg"
import images3 from "../../../images/Banner/img-3.jpg"




const Banner = () => {
    return (





        <>
            <Carousel className=" service-containe">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;