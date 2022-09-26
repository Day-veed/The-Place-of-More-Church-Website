import React from 'react'
import styled from 'styled-components'
import Spiritual from './Spiritual.jpg'
import excellence from './excellence.jpg'
import value from './value.jpg'
import purpose from './purpose.jpg'
import king from './king.jpg'
import crowd from '../../body/crowd.jpg';
import Card from './Card'
import { motion } from 'framer-motion'
import { headerAnimation, imageAnimation } from "../../Animations/Animations"
import { useScroll } from '../../useScroll';

function PictureExpe() {
    const [element, controls] = useScroll();

  return (
    <PictureExp ref={element}>
    <motion.div  variants={headerAnimation} animate={controls} transition={{delay: 0.3, type: 'spring', stiffness: 17, duration: 2}}>
      <Text >
        <h2 style={{color: "#722f37"}}>VISION OF THE MINISTRY<br/></h2>
        
        <div></div><br/>
        <p>To Inspire and Empower our generation to discover their purpose and fulfil their destinies to the glory of God and the advancement of His Kingdom.</p>
      </Text>
      </motion.div>
      <img src={crowd} alt='' />
    </PictureExp>
  )
}

export default PictureExpe

const PictureExp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: white;
    padding-bottom: 50px;

    > img {
      width: 45%;
      height: 450px;
      padding-right: 100px;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 90%;
        height: 400px;
        padding-right: 0px;
      }
    }
`

const Text = styled.div`
  padding-left: 50px;
  padding-top: 70px;
  width: 85%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Playfair Display', serif;
        font-style: inherit;
        font-weight: bold;
    }
    > p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 55px;
        color: black;
        font-size: 20px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    @media (max-width: 1000px) {
        padding-left: 0px;
        padding-top: 30px;
        width: 100%;
      > p {
        width: 99%;
        padding-left: 30px;
        font-size: 18px;
        font-family: 'Playfair Display', serif;
      }
    }
`