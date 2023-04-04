import React from 'react'
import styled from "styled-components"
import Paps from './Paps.png';
/*import PMS from './PMS.png';
import ow3 from './ow3.jpg';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import ow4 from './ow4.jpg';
import ow5 from './ow5.jpg';
import logo from './logo.jpg';
import logo1 from './logo1.jpg';
import crowd from './crowd.jpg';*/
import { motion } from 'framer-motion'
//import { Upcoming } from '@mui/icons-material';
import Services from '../Services';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
//import Counselling from '../Counselling/counselling';
import { headerAnimation } from "../Animations/Animations"
import { useScroll } from '../useScroll';
import Upcomingp from './upcoming';
import { useNavigate } from 'react-router-dom';

function HomeBody() {

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

    const navigate = useNavigate();

    const Resources = () => {
        navigate('/Resources')
    }

    const Ministries = () => {
        navigate('/Ministries')
    }
    
    const UpperRoom = () => {
        navigate('/UpperRoom')
    }

  return (
    <>
    <PictureExp ref={element}>
      <img src={Paps} alt='' />
      <motion.div  variants={headerAnimation} animate={controls} transition={{delay: 0.3, type: 'spring', stiffness: 17, duration: 2}}>
      <Text >
        <h2 style={{color: "#722f37"}}>Welcome to The Place of More Church<br/>
        <h5 style={{color: "black"}}> (Where Everything Works)</h5></h2>
        <p style={{color: "black"}}>Birthed Nine Years ago, The Place of More Church has transformed many lives, raised Faithful, Fruitful, and Fireful, Leaders and Ministers who are relevant in Ministry and other areas of Life.
        <div></div><br/>
        We are committed to teaching the word in its simplicity and honoring God through Worship, Service, and Giving.</p>
      </Text>
      </motion.div>
    </PictureExp>
    <Services />
    <motion.Motion initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
    {/*<Sections>
        <ShennyGloryFoundation>
            <motion.img initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 20 }} src={logo1} alt='' />
            <motion.h2 initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 15 }} style={{color: "#722f37"}}>Shenny Glory Foundation</motion.h2>
            <motion.h2 initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 12 }} style={{color: "#722f37"}}>(SGF)</motion.h2>
            <motion.p initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 12 }}>Shenny Glory Foundation has contributed immensely to the society through various welfare programmes and schemes.</motion.p>
        </ShennyGloryFoundation>
        <MoreBooksVille>
        <img src={logo2} alt='' />
            <h2 style={{color: "#722f37"}}>More Books Ville</h2>
            <p>More Books Ville is the book store of The Place of More Church were you can get books on different fields to help feed your soul and increase your knowledge bank.</p>
        </MoreBooksVille>
        <LeadWithPsg>
            <motion.img initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 20 }} src={logo} alt='' />
            <motion.h2 initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 15 }} style={{color: "#722f37"}}>Upper Room</motion.h2>
            <motion.p initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 12 }}>Upper Room is the Cildren's Ministry of Salvation Ministies that nurtures children spiritually and mentally to grow in Christ.</motion.p>
        </LeadWithPsg>
  </Sections>*/}
    </motion.Motion>
    <Upcomingp />
    
    </>
  )
}

export default HomeBody

const Motion = styled.div``

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
    width: 32%;
    height: 400px;
    
    @media (max-width: 750px) {
        width: 97%;
        height: 400px;
    }
`
const Img2 = styled.div`
    width: 32%;
    height: 400px;
    padding-left: 20px;
    @media (max-width: 750px) {
        width: 97%;
        padding-left: 0px;
    }
`
const Img3 = styled.div`
    width: 32%;
    height: 400px;
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
      width: 90%;
      height: 490px;
      padding-left: 70px;
      margin-top: 40px;
    }
    
    @media (max-width: 1400px) {
        > img {
            width: 50%;
        }
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 70%;
        height: 400px;
        padding-left: 0px;
        margin-top: 0px;
      }
    }

    @media screen and (max-width: 360px) {
        > img {
            margin-top: -10px;
            height: 350px;
        }
    }
`
const Text = styled.div`
  padding-left: 50px;
  padding-top: 40px;
  width: 85%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: inherit;
        font-weight: bold;
        font-size: 27px;

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
        font-size: 17px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
    }

    
    @media (max-width: 1000px) {
        padding-left: 15px;
        width: auto;
      > p {
        width: 98%;
        font-size: 18px;
      }
      >h2{
        font-size: 24px;
      }
    }

    @media (max-width: 600px) {
        padding-left: 0px;
        width: auto;
      > p {
        width: 98%;
        font-size: 18px;
        font-weight: normal;
      }
      >h2{
        font-size: 19px;
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