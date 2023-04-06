import React from 'react'
import { Carousel } from 'react-bootstrap';
//import img from '../Image/img.jpg';
//import img2 from '../Image/img2.jpg';
//import img3 from '../Image/img3.jpg';
//import img4 from '../Image/img4.jpg';
import img8 from '../Image/img8.jpg';
import img9 from '../Image/img8.jpg';
import img10 from '../Image/img10.jpg';
import styled from "styled-components"

//import "./CarouselContainer.css"
import './testimony.css'

function TestimonyContainer() {
  return (
    <div className='bod'>
      <Div>
        <Di>
        <h1>TESTIMONIES...</h1>
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

          {/*
          <Carousel.Item interval={4000}>
            <img
            className="d-block w-100"
            src={four}
            alt="Seventh slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
            className="d-block w-100"
            src={five}
            alt="Eight slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
            className="d-block w-100"
            src={six}
            alt="Ninth slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
            className="d-block w-100"
            src={seven}
            alt="Tenth slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
            className="d-block w-100"
            src={eight}
            alt="Eleven slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
            className="d-block w-100"
            src={nine}
            alt="Twelve slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
          </Carousel.Item>*/}
        </Carousel></Di>
      </Div>
      </div>
  )
}

export default TestimonyContainer

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: 360px) {
      margin-bottom: 40px;
  }
    //background: whitesmoke;
`

const Di = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vh;
    padding-top: 50px;
    padding-bottom: 10px;

    >h1 {
        padding-top: 30px;
        color: #722f37;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-family: 'EB Garamond', serif;
        margin-bottom: -50px;

        @media screen and (max-width: 360px) {
        margin-top: -40px;
        margin-bottom: -70px;
    }
    }

    @media (max-width: 750px) {
        width: 48vh;
    }
`