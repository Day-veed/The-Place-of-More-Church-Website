import React from 'react'
import styled from 'styled-components'
import './Partnership.css'
import Give from './GIve-1.jpg'
import Pledge from './Pledge.jpeg'
import { ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, Box, Center } from '@chakra-ui/react';
import { Button } from "@mui/material";
//import Tpm from './tp.jpg'
//import UsingHooks from './UsingHooks'
//import UsingComponents from './UsingComponents'

function Partnership() {
  return (
    <>
      <D>
      <h1>
        Partnership
      </h1>
      </D>
      <Div>
        {/*<UsingComponents />*/}
        <img src={Give} alt='' />
        
        {/*<img src={Tpm} alt='' />*/}
      </Div>
      <PictureExp>
      <img src={Pledge} alt='' />
      <div>
      <Textt >
        <h2 style={{color: "#722f37"}}>PLEDGE<br/>
        <h5 style={{color: "black"}}> (Tent of GLORY Sacrifice)</h5></h2>
        <p style={{color: "black"}}>The project is in top Gear and like you all know, Dedication Service is STILL 15th May - 21st May 2023.
        <div></div><br/>
          As we enter this Last Phase of the building, we have asked God for partners who would give a ONE time seed in one of three (3) Categories.
        </p>
        <p>
              1.₦30,000
            </p>
            <p>
              2.₦50,000
            </p>
            <p>
              3.₦100,000
            </p>
            <h3>To make a Pledge, kindly click the button below</h3>
            <Button variant='contained' borderRadius='3' href='https://forms.gle/3CLc6ypmRNZyssyx6'>
              Click
            </Button>
      </Textt>
      </div>
    </PictureExp>
    
    </>
  )
}

export default Partnership

const PictureExp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 25px;
    background-color: white;
    padding-bottom: 70px;
    > img {
      width: 55%;
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
            margin-top: 20px;
            height: 350px;
        }
    }
`
const Textt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-top: 40px;
  width: 85%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'EB Garamond', serif;
        font-style: inherit;
        font-weight: bold;
        font-size: 27px;

        >h5 {
        font-family: 'Playfair Display', serif;
        //font-family: 'Roboto Condensed', sans-serif;
    }
    }
    > h3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'EB Garamond', serif;
        font-style: inherit;
        font-weight: bold;
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 40px;

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
        font-family: 'EB Garamond', serif;
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
        padding: 10px;
        padding-left: 0px;
      > p {
        width: 100%;
        font-size: 18px;
        font-weight: normal;
      }
      >h2{
        font-size: 19px;
      }
      >h3{
        font-family: 'Roboto Condensed', sans-serif;
        font-style: inherit;
        font-size: 14px;
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

const D = styled.div`
  //margin-top: 80px;
  height: 80px;
  background: #722f37;
  display: flex;
  justify-content: center;
  align-items: center;
  >h1{
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    color: gold;
  }

  @media (max-width: 450px) {
      >h1 {
        font-size: 35px;
      }  
    }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  //margin-top: 90px;

  > img {
      width: 100%;
      height: auto;
      //margin-top: -162px;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 100%;
        height: auto;
      }
    }
`