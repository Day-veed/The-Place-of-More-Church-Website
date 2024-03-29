/*import React from 'react';
// import logo from './logo.svg';
import Portfolio from '../../Portfolio.jsx'
//import './App.css';

function Training() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Studio!</div>
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">E-Commerce</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Web Security</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
            <h4>Kay Garland</h4>
            <p className="text-muted">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Marketer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
            <h4>Diana Pertersen</h4>
            <p className="text-muted">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Training;*/

import React, { useState } from 'react'
import CarouselContainer from '../../carousel/CarouselContainer'
import Promotions from '../../promotions/messages'
import ReactPlayer from 'react-player'
//import vid from '../../video/vid.mp4'
import { motion } from 'framer-motion'
import styled from "styled-components"
import MTCHistory from '../../History/MTC'
import Carousel from './Carousel'
import { CSSTransition } from 'react-transition-group'
import { SwitchTransition } from 'react-transition-group'
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import testimonial from './data'
import './MTC.css'
/*import Video from './video/video'
import Appbar from './appbar'
import CarouselContainer from './carousel/CarouselContainer'
import AppbarMobileBanner from './banner/Banner'
import Promotions from './promotions/messages'
import Images from './images/Images'
import Footer from './footer/Footer'
import AppDrawer from './drawer/AppDrawer'
import Navbar from './Navbar'
import HomeBody from './body/HomeBody'*/

const TestimonialSectionStyles = styled.div`
padding: 10rem 0;
text-align: center;
`

function MTC() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonial[activeIndex];

  function handlePrev(){
    if(activeIndex <= 0){
      setActiveIndex(testimonial.length -1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext(){
    if(activeIndex >= testimonial.length -1){
      setActiveIndex(0);
    }else{
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  return (
    <>
      <CarouselContainer />
      <Promotions />
      <MTCHistory />
      
      {/*<H>
      <motion.div initial={{ y: 75 }} animate={{ y: 10}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
        <T>
          <h1 >Training Experience</h1>
        </T>
        
        <VideoContainer>
          <V>
          <ReactPlayer 
              width='450px' 
              height='35' 
              controls 
              url={vid}
              onReady={() => console.log('onready callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={() => console.log('onError callback')} 
          />
          </V>
          <VD>
          <ReactPlayer 
              width='450px' 
              height='35' 
              controls 
              url={vid}
              onReady={() => console.log('onready callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={() => console.log('onError callback')} 
          />
          </VD>
        </VideoContainer>
      </motion.div>
  </H>*/}

      <Testimonial>
        <Container>
          <h2>Testimonials</h2>
          <p>See what our trainees have to say about the training</p>
        <TestimonialWrapper>
          <SwitchTransition>
            <CSSTransition
              key={activeSlide.id}
              timeout={300} classNames="fade"
            >
              <TestimonialInfo>
                <TestimonialDesc>
                  <p>
                    {activeSlide.desc}
                  </p>
                </TestimonialDesc>
                <TestimonialName>
                  {activeSlide.name}
                </TestimonialName>
                <TestimonialTitle>
                  {activeSlide.title} {activeSlide.org}
                </TestimonialTitle>
              </TestimonialInfo>
            </CSSTransition>
          </SwitchTransition>
        </TestimonialWrapper>
        <Arrows>
          <Prev
            onClick={handlePrev}
            role='button'
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </Prev>
          <Next
            onClick={handleNext}
            role='button'
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </Next>
        </Arrows>
        </Container>
      </Testimonial>
      
    </>
  )
}

export default MTC

const V = styled.div`
  padding-right: 70px;
  @media (max-width: 800px) {
      padding-right: 0px;
      padding-bottom: 20px;
    }
`  
const VD = styled.div`
  
`
const Container = styled.div`
margin-top: -70px;
padding: 10px;
  >p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 28px;
  }
  >h2{
    font-family: 'Playfair Display', serif;
    color: #722f37;
    font-size: 38px;
  }
  @media (max-width: 450px) {
      >h2 {
        margin-top: -50px;
      }  
      >p {
        font-size: 22px;
      }
    }
`
const TestimonialWrapper = styled.div`
  position: relative;
    max-width: 700px;
    margin: 0 auto;
    background: whitesmoke;
    border-radius: 10px;
`
const TestimonialInfo = styled.div`
  width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    //margin-top: 5rem;
`
const TestimonialDesc = styled.div`
  >p{
    color: #722f37;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
  }
`
const TestimonialName = styled.div`
  //margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 1.5rem;
    padding-top: 20px;
    color: grey;
`
const TestimonialTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.3rem;
  font-family: 'Roboto Condensed', sans-serif;
`
const Arrows = styled.div`
  //margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: -70px;
    svg{
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev{
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
    .fade-enter{
      opacity: 0;
      transform: scale(.96);
    }
    .fade-enter-active{
      opacity: 1;
      transition: 250ms ease-in opacity;
      transform: scale(1);
      transition-property: opacity, transform;
    }
    .fade-exit{
      opacity: 1;
      transform: scale(1);
    }
    .fade-exit-active{
      opacity: 0;
      transition: 250ms ease-in opacity, transform;
      transform: scale(.96);
    }
  
`
const Prev = styled.div`
  //margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
      background: whitesmoke;
      margin: 5px;
      &:hover {
        background-color: #722f37;
      }
`
const Next = styled.div`
  //margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
      background: whitesmoke;
      margin: 5px;
      &:hover {
        background-color: #722f37;
      }
`
const Testimonial = styled.div`
  padding: 10rem 0;
  text-align: center;
  background: grey;
  //background: black;
`  

const H = styled.div`
  background: whitesmoke;
  padding: 20px;
  padding-bottom: 20px;
`  

const T = styled.div`  
    //display: block;
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    color: #722f37;
    padding-top: 20px;
    padding-bottom: 20px;
    > h1 {
      font-family: 'Playfair Display', serif;
    }
`

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px 20px;

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`