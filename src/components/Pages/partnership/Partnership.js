import React from 'react'
import styled from 'styled-components'
import './Partnership.css'
import Give from './GIve-1.jpg'
import Tpm from './tp.jpg'
import UsingHooks from './UsingHooks'
import UsingComponents from './UsingComponents'

function Partnership() {
  return (
    <>
      
        <Div>
          <UsingComponents />
          <img src={Give} alt='' />
          
          <img src={Tpm} alt='' />
        </Div>
    </>
  )
}

export default Partnership

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  margin-top: 80px;

  > img {
      width: 70%;
      height: auto;
      
      
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