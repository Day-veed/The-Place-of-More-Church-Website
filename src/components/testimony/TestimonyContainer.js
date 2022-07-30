import React from 'react'
import { Carousel } from 'react-bootstrap';
import img from '../Image/img.jpg';
import img2 from '../Image/img2.jpg';
import img3 from '../Image/img3.jpg';
import img4 from '../Image/img4.jpg';
import img8 from '../Image/img8.jpg';
import img9 from '../Image/img8.jpg';
import img10 from '../Image/img10.jpg';
import styled from "styled-components"
//import "./CarouselContainer.css"

function TestimonyContainer() {
  return (
      <Div>
        <Di>
        <h2>Testimonies...</h2>
      <Carousel controls={false} fade={true} pause={false}>
          <Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={img8}
              alt="First slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
              <img
              className="d-block w-100"
              src={img9} 
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
              src={img10}
              alt="Third slide"
              />
              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
          </Carousel.Item>
  </Carousel></Di>
      </Div>
  )
}

export default TestimonyContainer

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
   
`

const Di = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;

    >h2 {
        padding-top: 30px;
        color: #722f37;
    }
`