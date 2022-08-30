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

function MTCHistory() {

  const {ref, inView} = useInView({threshold: 0.2});
    const animation = useAnimation();

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
    <PictureExp ref={ref}>
      <img src={MTC} alt='' />
      <motion.div  animate={animation}>
      <Text >
        <h2 style={{color: "#722f37"}}>Mnisterial Training Course (MTC)<br/>
        {/*<h5 style={{color: "black"}}> (Where Everything Works)</h5>*/}</h2>
        <p style={{color: "grey"}}>MTC is a Six weeks extensive Ministerial Training Course by TPM Institute of Leadership where we train Leaders to become Ministers. 
          We train Ministers to be Spiritual, Purposeful, Fireful, and to Serve.
        <div></div><br/>
        We have currently trained over 300 Ministers through the TPM Institute of Leadership.</p>
      </Text>
      </motion.div>
    </PictureExp>
       <HistoryContainer>
        {/*<div>MTC is divided into five teams during the training with Pastor in Charge and Team Leads.</div>*/}
        <ServicesContainer>
        {/*<ServicesH1>Our Services</ServicesH1>*/}
        
      </ServicesContainer>
        {/*<About>
        <h5>MTC is a Six weeks extensive Ministerial Training Course by TPM Institute of Leadership where we train Leaders to become Ministers. 
          We train Ministers to be Spiritual, Purposeful, Fireful, and to Serve.</h5>
        <h5>We have currently trained over 300 Ministers through the TPM Institute of Leadership.</h5>
        <h5>MTC is divided into five teams during the training with Pastor in Charge and Team Leads.</h5>
  </About>
        <p>These teams are;</p>*/}
        <Set>
          <UpcomingPrograms>
            <p style={{color: "#722f37"}}>MTC is divided into five teams during the training with Pastor in Charge and Team Leads</p>
            <h2 style={{color: "gray", fontStyle: 'italic'}}>These teams are...</h2>
            <Images>
              <D>
              <Img1><motion.img initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }} src={Ven2} alt='' /> </Img1>
              <motion.div initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }}>Team Principle</motion.div>
              </D>
              <D>
              <Img2><motion.img initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }} src={Ven} alt='' /></Img2>
              <motion.div initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }}>Team Power</motion.div>
              </D>
              <D>
              <Img3><img src={Ven3} alt='' /></Img3>
              <div>Team Purpose</div>
              </D>
              <D>
              <Img3><motion.img initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }} src={Ven3} alt='' /></Img3>
              <motion.div initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }}>Team Prayer</motion.div>
              </D>
              <D>
              <Img3><motion.img initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }} src={Ven3} alt='' /></Img3>
              <motion.div initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }}>Team Passion</motion.div>
              </D>
            </Images>
          </UpcomingPrograms>
        </Set>
        

        <h4> To register for MTC with the TPM Institute of Leadership, click the button bellow</h4>
        <h6>https://forms.gle/jZGQXC8XKTV9Fmbd6</h6>
        <Button style={{backgroundColor:'#722f37', color: 'white', borderRadius:'50px'}} href='https://forms.gle/jZGQXC8XKTV9Fmbd6'>Register</Button>

        
      </HistoryContainer>

    </Div>
    <Facilitators>
      <div>Training Facilitators</div>
      <ServicesContainer>
        {/*<ServicesH1>Our Services</ServicesH1>*/}
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Ven4}/>
            <ServicesH2>Pastor Shenny Glory</ServicesH2>
            <ServicesP>A List of ministries and their functions.</ServicesP>
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
          <ServicesCard>
            <ServicesIcon src={Ven}/>
            <ServicesH2>Minister Mercy Vencit</ServicesH2>
            <ServicesP>MIC/ TPM Coordinator of Training</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>

    </Facilitators>
    </>
    
  )
}

export default MTCHistory


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
  width: 70%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        font-style: inherit;
        font-weight: bold;
    }
    > p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 25px;
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        padding-left: 15px;
        width: auto;
      > p {
        width: 98%;
        
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
  background: white;
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