import React from 'react'
import styled from 'styled-components'

function UpperRoom() {
  return (
    <>
    <D>
      <h1>
        Ministries
      </h1>
    </D>
    <Div>
      
    </Div>
    </>
  )
}

export default UpperRoom

const Div = styled.div`
  height: 1000px;
`
const D = styled.div`
  margin-top: 80px;
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