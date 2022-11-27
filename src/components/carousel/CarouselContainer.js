  import React from 'react'
  import { Carousel } from 'react-bootstrap';
  import img from '../Image/img.jpg';
  import img2 from '../Image/img2.jpg';
  import img3 from '../Image/img3.jpg';
  import img4 from '../Image/img4.jpg';
  import Path from './02.jpg';
  import img5 from '../Image/img6.jpg';
  import img7 from '../Image/img7.jpg';
  import Leadership from './Leadership.jpeg';
  import "./CarouselContainer.css"
  
  function carouselContainer() {
    return (
        <div className='img'>
        <Carousel controls={false} fade={true} pause={false}>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={Leadership}
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
                src={Path} 
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
                src={img5}
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
                src={img4}
                alt="Forth slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            {/*<Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img5}
                alt="Fifth slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
    </Carousel.Item>*/}
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img7}
                alt="Sixth slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img}
                alt="Seventh slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
  }
  
  export default carouselContainer