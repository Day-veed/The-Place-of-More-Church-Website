import React from 'react'
import styled from "styled-components"
import ow1 from './ow1.jpg';
import ow2 from './ow2.jpg';
import ow3 from './ow3.jpg';
import ow4 from './ow4.jpg';
import ow5 from './ow5.jpg';
import logo from './logo.jpg';
import logo1 from './logo1.jpg';
import logo2 from './logo2.jpg';
import { motion } from 'framer-motion'
import { Upcoming } from '@mui/icons-material';
import Services from '../Services';

function HomeBody() {
  return (
    <>
    <PictureExp>
      <img src={ow1} alt='' />
      <motion.div initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
      <Text>
        <h2 style={{color: "#722f37"}}>Welcome to The Place of More <br/>
        <h5 style={{color: "gray"}}> (Where Everything Works)</h5></h2>
        <p>The Place of More was established 1st January 2007 
          with a divine mandate to "Inspire and Empower people to discover their purpose to the glory of God and the advancement of His kingdom" 
          Her global headquarters is currently at old chineese bakery Gondola, Jos, Plateau State, Nigeria.</p>
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
    <Set>
    <UpcomingPrograms>
        <h4 style={{color: "#722f37"}}>Upcoming Programs...</h4>
        <h1 style={{color: "gray", fontStyle: 'italic'}}>Prepare to attend</h1>
        <Images>
        <Img1><motion.img initial={{ x: '-100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }} src={ow3} alt='' /></Img1>
        <Img2><img src={ow4} alt='' /></Img2>
        <Img3><motion.img initial={{ x: '100vw' }} animate={{ x: 0}} transition={{ delay: 0.2, type: 'spring', stiffness: 17 }} src={ow5} alt='' /></Img3>
        </Images>
    </UpcomingPrograms>
    </Set>
    </>
  )
}

export default HomeBody

const Motion = styled.div``

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
    background-color: white;
    width: 85%;
   // background-clip: ;

    > h4 {
        padding-top: 25px;
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
    padding-bottom: 100px;
    margin-top: 25px;
    background-color: whitesmoke;
    > img {
      width: 55%;
      height: 400px;
      padding-left: 150px;
      margin-bottom: 15px;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > img {
        width: 80%;
        padding-left: 0px;
      }
    }
    
`
const Text = styled.div`
  padding-left: 20px;
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
        font-weight: bold;
        font-size: 14px;
    }
    @media (max-width: 1000px) {
        width: auto;
      > p {
        width: 95%;
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