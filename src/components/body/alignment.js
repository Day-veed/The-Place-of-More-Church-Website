import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Align from './align.jpg'

function alignment() {
  return (
    <div>
      <PictureExp>
      <img src={Align} alt='' />
      <div>
      <Textt >
        <h2 style={{color: "#722f37"}}>Register for Alignment 2023<br/>
        <h5 style={{color: "black"}}> </h5></h2>
        <p style={{color: "black"}}>Alignment 2023 is Here
        <div></div><br/>
          It is our Mid Year Leadership Camp at The Place of More Church.
        </p>
        
            <p style={{color: "grey", marginBottom: '30px'}}>To be a part, kindly register using the button below.</p>
            <Button 
            variant='contained' 
            borderRadius='3' 
            href='https://forms.gle/KsLtzhosNCd88R5z7'
            style={{
                backgroundColor: "#722f37",
                color: 'white',
                borderRadius: '5px',
                width: '250px'
            }}
            >
              Register
            </Button>
      </Textt>
      </div>
      </PictureExp>
    </div>
  )
}

export default alignment

const PictureExp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 25px;
    background-color: whitesmoke;
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

    @media screen and (max-width: 500px) {
        margin-top: -50px;
        > img {
            width: 95%;
            margin-top: 20px;
            height: 300px;
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
        font-family: 'Roboto Condensed', sans-serif;
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
        font-family: 'Roboto Condensed', sans-serif;
        font-style: inherit;
        //font-weight: bold;
        font-size: 18px;
        //margin-top: 10px;
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
        font-size: 16px;
        font-family: 'Roboto Condensed', sans-serif;
        //font-weight: bold;
    }

    
    @media (max-width: 1000px) {
        padding-left: 15px;
        width: auto;
      > p {
        width: 98%;
        font-size: 16px;
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
        font-size: 16px;
        font-weight: normal;
      }
      >h2{
        font-size: 19px;
      }
      >h3{
        font-family: 'Roboto Condensed', sans-serif;
        font-style: inherit;
        font-size: 16px;
        width: 90%;
      }
    }
`