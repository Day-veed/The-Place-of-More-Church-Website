import React from 'react'
import { Carousel } from 'react-bootstrap';
import img from '../Image/img.jpg';
import TPM1 from './TPM-9.jpg';
import TPM2 from './TPM-17.jpg';
import TPM3 from './TPM-18.jpg';
import img7 from '../Image/img7.jpg';
import MTC from '../body/MTC.jpg'; 
import "./CarouselContainerLTC.css"

function CarouselContainerLTC() {
  return (
      
      <Carousel controls={false} fade={true} pause={false}>
          
        {/*<Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={img3} 
              alt="First slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
  </Carousel.Item>*/}
          
          <Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={TPM1}
              alt="Second slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={TPM2}
              alt="Third slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={TPM3}
              alt="Forth slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={img7}
              alt="Fifth slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    
  )
}

export default CarouselContainerLTC