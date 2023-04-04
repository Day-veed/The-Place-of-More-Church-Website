import React from 'react'
import styled from 'styled-components'
import './Partnership.css'
import Give from './GIve-1.jpg'
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
    </>
  )
}

export default Partnership

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
      margin-top: -162px;
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