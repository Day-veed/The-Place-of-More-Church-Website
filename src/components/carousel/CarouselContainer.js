  import React from 'react'
  import { Carousel } from 'react-bootstrap';
  import img from '../Image/img.jpg';
  import img2 from '../Image/img2.jpg';
  import img3 from '../Image/img3.jpg';
  import img4 from '../Image/img4.jpg';
  import img5 from '../Image/img5.jpg';
  import img6 from '../Image/img6.jpg';
  import img7 from '../Image/img7.jpg';
  
  function carouselContainer() {
    return (
        <Carousel controls={false} fade={true} pause={false}>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img2} 
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img4}
                alt="Forth slide"
                />
                <Carousel.Caption>
                <h3>Forth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img5}
                alt="Fifth slide"
                />
                <Carousel.Caption>
                <h3>Fifth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img6}
                alt="Sixth slide"
                />
                <Carousel.Caption>
                <h3>Sixth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={img7}
                alt="Seventh slide"
                />
                <Carousel.Caption>
                <h3>Seventh slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
  
  export default carouselContainer