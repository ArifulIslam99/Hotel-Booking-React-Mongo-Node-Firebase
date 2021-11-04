import React from 'react';
import { Carousel } from 'react-bootstrap';
import img_1 from '../../../images/1.jpg'
import img_2 from '../../../images/2.jpg'
import img_3 from '../../../images/3.jpg'

const Banner = () => {
    return (
     <div className=" mb-5 ">
         <Carousel>
  <Carousel.Item>
    <img
      className=" w-100"
      src={img_1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="fw-bold fs-2 text-warning">A wondere Of Beauty</h3>
      <p>Enjoy the great beauty of the city and Us.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src={img_2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="fw-bold fs-2 text-warning">First Seven Start in the Country</h3>
      <p>Exodia is the First and still only Seven Start  in the country.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src={img_3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="fw-bold fs-2 text-warning">We Offer Luxury</h3>
      <p>We offer the best service to the tourists and guests visit us</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 

       
     </div>
    );
};

export default Banner;