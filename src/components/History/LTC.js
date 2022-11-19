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
//import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';
import { useForm } from 'react-hook-form';
import './LTC.css'
import { useScroll } from '../useScroll';
import { headerAnimation } from '../Animations/Animations';

function LTCHistory() {

  const {ref, inView} = useInView({threshold: 0.2});
    const animation = useAnimation();
    const [element, controls] = useScroll();

    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            FName: formData.name,
            Email: formData.email,
            WNumber: formData.number,

            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        //dispatch(closeSendMessage());
    }

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
        <h2 style={{color: "#722f37"}}>Leadership Training Course <br/>
        <h5 style={{color: "black"}}> (LTC) </h5></h2>
        <p style={{color: "black"}}>LTC is a Four weeks extensive Leadership Training Course by TPM Institute of Leadership where we train members to become leaders. 
        This training is a robust course on leadership that can be applied in any area of life.
        <br/><br/>
        Over the years, we have trained over 300 Leaders at TPM Institute of Leadership.</p>
      </Text>
      </motion.div>
    </PictureExp>
       {/*<HistoryContainer>
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
            <p>These teams are;</p>
            <Set>
              <UpcomingPrograms>
                <p style={{color: "#722f37"}}>LTC is divided into five teams during the training with Pastor in Charge and Team Leads</p>
                <h2 style={{color: "gray", fontStyle: 'italic'}}>These teams are...</h2>
                {/*<Images>
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
            </Set> hereeeeeeeeeeeeeeeeeeee_________
        

        <h3> To register for LTC with the TPM Institute of Leadership, fill the form bellow</h3>
        <form onSubmit={ handleSubmit(onSubmit)} className='form'>
          
          <input placeholder='FULL NAME' id='name' type="text" {...register('message', { required: true})} />
          {/*errors.name && <p className='sendMail__error'>Name is Required!</p>hereeeeee_________________________________
          <input placeholder='EMAIL' id='email' type="text" {...register('to', { required: true})} />
          {/*errors.email && <p className='sendMail__error'>Email is Required!</p>___________________________________________________
          <input placeholder='WHATSAPP NUMBER' id='number' type="text" {...register('message', { required: true})} />
          {/*errors.number && <p className='sendMail__error'>WhatsApp Number is Required!</p>__________________________________________

          <select placeholder='Will you be available for all the training?'>
            <option value="mario">Yes</option>
            <option value="yoshi">No</option>
          </select>

          <div className='register__option'>
            <Button className='register' variant='contained' color='primary' type='submit'>Register</Button>
          </div>
        </form>

  
        <Button style={{backgroundColor:'#722f37', color: 'white', borderRadius:'50px'}} href='https://forms.gle/wmWi1CKKPiE2znd89'>Register</Button>  
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
            <ServicesP>Rector, TPM Institute of Leadership</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Ven2}/>
            <ServicesH2>Pastor Noah Adediran</ServicesH2>
            <ServicesP>Director of Training</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Ven3}/>
            <ServicesH2>Pastor Sarah Larbong</ServicesH2>
            <ServicesP>MTC Coordinator</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </Facilitators>
    </>
    
  )
}

export default LTCHistory

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-flow: wrap;
gap: 0.5rem;
`;

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
        width: 90%;
        padding-left: 0px;
        margin-top: -50px;
      }
    }
    @media (max-width: 450px) {
      margin-top: -7px;
      >img {
        height: 350px;
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
        font-family: 'Roboto Condensed', sans-serif;
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
@media (max-width: 450px) {
      >div {
        margin-top: -80px;
        margin-bottom: 20px;
      }  
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
  >h3 {
color: lightsalmon;
font-family: 'Roboto Condensed', sans-serif;
//font-size: 18px;
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