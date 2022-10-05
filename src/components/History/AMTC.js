import React from 'react'
import styled from 'styled-components'
import img2 from '../Image/img2.jpg';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesIcon } from './MtcElements'
import Ven4 from '../body/Ven4.png';
import Ven2 from '../body/Ven2.png';
import Ven3 from '../body/Ven3.png'; 
import Ven from '../body/Ven.png'; 
import MTC from '../body/MTC.jpg'; 
import { motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { Button } from "@mui/material";
//import { motion } from "framer-motion";
import { headerAnimation, imageAnimation } from "../Animations/Animations"
import { useScroll } from '../useScroll';

function AMTCHistory() {

  const {ref, inView} = useInView({threshold: 0.2});
    const animation = useAnimation();
    const [element, controls] = useScroll();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                  delay: 0.5, type: 'string', stiffness: 10
                }
            })
        }
        if(!inView){
            animation.start({x: '100vw'})
        }
        console.log("use effect hook, inView = ", inView);
    }, [inView])

  return (
    <>
    <Div>
    <PictureExp ref={element}>
      <img src={MTC} alt='' />
      <motion.div  variants={headerAnimation} animate={controls} transition={{delay: 0.3, type: 'spring', stiffness: 17, duration: 2}}>
      <Text >
        <h2 style={{color: "#722f37"}}>ADVANCED MINISTERIAL TRAINING <br/> <h2 style={{color: "#722f37"}}>COURSE </h2><br/>
        <h5 style={{color: "black"}}> (AMTC) </h5></h2>
        <p style={{color: "black"}}>AMTC is an eight weeks extensive Training Course by TPM Institute of Leadership for people who have a call into Ministry. 
        For everyone who has a call into any ministry, then this training is for you. 
        <br/><br/>
        We will equip you with the knowledge on what you need to know and do in other to fulfil the ministry God has called you into.</p>
      </Text>
      </motion.div>
    </PictureExp>
       {/*<HistoryContainer>
        {/*<div>MTC is divided into five teams during the training with Pastor in Charge and Team Leads.</div>*_____________
        <ServicesContainer>
        {/*<ServicesH1>Our Services</ServicesH1>*_____________________________________________________________________________
        
      </ServicesContainer>
        {/*<About>
        <h5>MTC is a Six weeks extensive Ministerial Training Course by TPM Institute of Leadership where we train Leaders to become Ministers. 
          We train Ministers to be Spiritual, Purposeful, Fireful, and to Serve.</h5>
        <h5>We have currently trained over 300 Ministers through the TPM Institute of Leadership.</h5>
        <h5>MTC is divided into five teams during the training with Pastor in Charge and Team Leads.</h5>
  </About>
        <p>These teams are;</p>*______________________________________
        
        

        <h4> To register for AMTC with the TPM Institute of Leadership, click the button bellow</h4>
        
        <Button style={{backgroundColor:'#722f37', color: 'white', borderRadius:'50px'}} href='https://forms.gle/4HsCLbvZTRWE6rMQ7'>Register</Button>

        
      </HistoryContainer>*/}

    </Div>
    <Facilitators>
      <div>Training Facilitators</div>
      <ServicesContainer>
        {/*<ServicesH1>Our Services</ServicesH1>*/}
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Ven4}/>
            <ServicesH2>Pastor Shenny Glory</ServicesH2>
            <ServicesP>Lead Pastor at The Place of MORE Church.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Ven2}/>
            <ServicesH2>Pastor Noah Adediran</ServicesH2>
            <ServicesP>Director of Training</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Ven3}/>
            <ServicesH2>Pastor Sarah Larbong</ServicesH2>
            <ServicesP>Assistant Director of Training(MTC)</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>

    </Facilitators>
    </>
    
  )
}

export default AMTCHistory


const D = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: auto;
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

        >h2{
          font-family: 'Roboto Condensed', sans-serif;
          font-style: inherit;
          font-weight: bold;
        }

        >h5 {
          margin-top: -25px;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
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
      >h2{
        //font-size: 21px;
      }
    }
`

const Set = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`

const UpcomingPrograms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    padding-bottom: 40px;
    
    width: 85%;
   // background-clip: ;
    > p {
        padding-top: 25px;
        font-size: 38;
    }
    >h2{
        font-weight: bold;
        font-stretch: expanded;
        padding-top: 25px;
    }
    @media (max-width: 1000px) {
        width: auto;
        height: auto;
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
    width: auto;
    height: 400px;
    
    @media (max-width: 750px) {
        width: 97%;
        height: 400px;
    }
`
const Img2 = styled.div`
    width: auto;
    height: 400px;
    padding-left: 20px;
    @media (max-width: 750px) {
        width: 97%;
        padding-left: 0px;
    }
`
const Img3 = styled.div`
    width: auto;
    height: 400px;
    padding-left: 20px;
    @media (max-width: 750px) {
        width: 97%;
        padding-left: 0px;
    }
`

const Div = styled.div`
  //background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-GqyBK6QyQbqvABxnZ1y5r2CjzVgmoIbRA&usqp=CAU");
background: whitesmoke;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //box-shadow: inset 0 0 0 1000px rgba(0, 0, 0.2);
  object-fit: contain;
  padding-top: 10px;
`
const Facilitators = styled.div`
>div {
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #722f37;
  font-style: italic;
  padding-top: 70px;
  background: whitesmoke;
}
`

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 70px;
  @media screen and (max-width: 900px){
    padding: 30px;
  }
  >div {
    font-size: 28px;
    
    padding-bottom: 10px;
    color: black;
  }
  >h1 {
    color: #722f37;
  }
  >h4 {
color: lightsalmon;
font-size: 18px;
  }
  >h5 {
    color: gold;
    font-size: 28px;
  }
  >h6 {
    color: gold;
  }
  >p {
font-size: 24px;
color: #722f37;
  }
`
const  About = styled.div`
background: whitesmoke;
padding: 30px;
border-radius: 5px;
//background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbOM1h-Q0MXICkd4B992QOYMIQ7epjTeFlQ&usqp=CAU");
>h5 {
  color: black;
  font-size: 20px;
}
`