import React from 'react'
import styled from "styled-components"
/*import ow1 from './ow1.jpg';
import ow2 from './ow2.jpg';
import ow3 from './ow3.jpg';
import ow4 from './ow4.jpg';
import ow5 from './ow5.jpg';*/
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
//import logo from './logo.jpg';
//import logo1 from './logo1.jpg';
//import crowd from './crowd.jpg';
import { motion } from 'framer-motion'
/*import { Upcoming } from '@mui/icons-material';
import Services from '../Services';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import Counselling from '../Counselling/counselling';*/
import { headerAnimation } from "../Animations/Animations"
import { useScroll } from '../useScroll';

function Upcomingp() {

    //const animation = useAnimation();
    const [element, controls] = useScroll();

  return (
    <Set >
    <div>
    <UpcomingPrograms ref={element}>
        <motion.h5 variants={headerAnimation} animate={controls} transition={{ type: 'spring', stiffness: 30}} style={{color: "#722f37"}}>Upcoming Programs...</motion.h5>
        <h1 style={{color: "gray", fontStyle: 'italic'}}>Prepare to attend</h1>
        <Images>
        <Img1><img  src={three} alt='' /></Img1>
        <Img2><img src={two} alt='' /></Img2>
        <Img3><img  src={one} alt='' /></Img3>
        </Images>
    </UpcomingPrograms>
    </div>
    </Set>
  )
}

export default Upcomingp

const Set = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    @media (max-width: 750px) {
        flex-direction: column;
    }

    >div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        @media (max-width: 750px) {
            flex-direction: column;
        }
    }
`

const UpcomingPrograms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    padding-bottom: 40px;
    background-color: white;
    width: 85%;
   // background-clip: ;
    > h5 {
        padding-top: 75px;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        margin-top: -50px;
    }
    >h1{
        font-weight: bold;
        font-family: 'Playfair Display', serif;
        padding-top: 5px;
        margin-bottom: -50px;
    }
    @media (max-width: 1000px) {
        width: auto;
        height: auto;

        >h1{
        font-weight: bold;
        font-family: 'Playfair Display', serif;
        padding-top: 5px;
        font-stretch: expanded;
    }
    }
`
const Images = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    
    @media (max-width: 750px) {
        flex-direction: column;
        width: auto;
        height: 70%;
    }
`
const Img1 = styled.div`
    width: 50%;
    height: 450px;
    
    @media (max-width: 750px) {
        width: 97%;
        height: 400px;
    }
`
const Img2 = styled.div`
    width: 50%;
    height: 450px;
    padding-left: 20px;
    @media (max-width: 750px) {
        width: 97%;
        padding-left: 0px;
    }
`
const Img3 = styled.div`
    width: 50%;
    height: 450px;
    padding-left: 20px;
    @media (max-width: 750px) {
        width: 97%;
        padding-left: 0px;
    }
`

const PictureExp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 25px;
    background-color: white;
    padding-bottom: 70px;
    > img {
      width: 55%;
      height: 400px;
      padding-left: 150px;
      
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 80%;
        padding-left: 0px;
      }
    }
`
const Text = styled.div`
  padding-left: 50px;
  padding-top: 40px;
  width: 80%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: inherit;
        font-weight: bold;

        >h5 {
        font-family: 'Playfair Display', serif;
        //font-family: 'Roboto Condensed', sans-serif;
    }
    }
    > p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 25px;
        font-size: 16px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
    }

    
    @media (max-width: 1000px) {
        padding-left: 15px;
        width: auto;
      > p {
        width: 98%;
      }
    }
`
const Sections = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
const ShennyGloryFoundation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 28%;
    padding: 7px;
    margin-left: 15px;
    
    >img {
        width: 50%;
        margin-bottom: 15px;
    }
    > h1 {
        
    }
    > p {
        width: 90%;
        margin-bottom: 30px;
    }
    @media (max-width: 1000px) {
        width: 70%;
        margin-top: 15px;
        >p {
            width: 100%;
        }
    }
`
const MoreBooksVille = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 28%;
    padding: 7px;
    margin-left: 15px;
    padding-bottom: 30px;
    >img {
        width: 50%;
        margin-bottom: 5px;
    }
    > p {
        width: 90%;
        margin-bottom: 30px;
    }
    
    @media (max-width: 1000px) {
        width: 70%;
        margin-top: 15px;
        margin-left: 0px;
        >p {
            width: 100%;
        }
    }
`
const LeadWithPsg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 28%;
    margin-left: 15px;
    >img {
        width: 50%;
        margin-bottom: 15px;
    }
    > p {
        width: 100%;
        margin-bottom: 110px;
    }
    @media (max-width: 1000px) {
        width: 70%;
        margin-top: 15px;
        margin-left: 0px;
        
        >h2 {
            font-stretch: extra-expanded;
        }
        >p {
            width: 90%;
        }
    }
`