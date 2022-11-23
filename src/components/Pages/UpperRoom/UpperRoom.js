import React from 'react'
import styled from 'styled-components'
import one from './01.jpg'
import two from './02.jpg'
import three from './03.jpg'
import four from './04.jpg'
import five from './05.jpg'
import six from './06.jpg'
import Seven from './07.jpg'
import Eight from './08.jpg'
//import Nine from './SGF-2.jpg'

function UpperRoom() {
  return (
    <>
    <D>
      <h1>
        More Kids
      </h1>
    </D>
    <Div>
      <h2>We focuse greatly on Raising Kingdom-minded Kids</h2>
      <h3>We nuture children spiritually and mentally to grow in Christ, glorify Him and advance His kingdom.</h3>
    </Div>
    <Sgf>
      {/*<h1 style={{color: "#722f37"}}>SHENNY GLORY FOUNDATION (SGF)</h1>
      <p>Shenny Glory Foundation is the brainchild of Pastor Shenny Glory, the Lead Pastor at The Place of More Church, Mentor and Business Strategist</p>
  <p>It is committed to rewarding Excellence, Restoring Hope and positively adding values to impact the lives of the people.</p>*/}
    <div>
      <img src={one} alt='' />
      <img src={two} alt='' />
      </div>
      <div>
      <img src={three} alt='' />
      <img src={four} alt='' />
      </div>
      <div>
      <img src={five} alt='' />
      <img src={six} alt='' />
      </div>
      <div>
      <img src={Seven} alt='' />
      <img src={Eight} alt='' />
      </div>

    </Sgf>
    </>
  )
}

export default UpperRoom

const Div = styled.div`
  //height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 15px;

  >h2 {
    font-family: 'Tangerine', serif;
    font-size: 28px;
    margin-bottom: 20px;
  }
  >h3 {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }
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
  @media (max-width: 450px) {
      >h1 {
        font-size: 35px;
      }  
    }
`

const Sgf = styled.div`
background: whitesmoke;
padding: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

>h1 {
  //font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  //color: "#722f37"
}
>p {
  padding-top: 15px;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
}
> img {
  width: 59%;
    height: 500px;
    padding-left: 100px;
    padding-bottom: 40px;
    
}

>div {
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 59%;
    height: 500px;
    padding: 20px;
    padding-bottom: 40px;    
  }
}

@media (max-width: 1000px) {
  padding: 0px;
  >h1{
    padding: 20px;
  }
  >p{
    padding: 20px;
  }
  >div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 70%;
    height: 500px;
    padding: 20px;
    padding-bottom: 40px;    
  }
}
  }

  @media (max-width: 800px) {
    padding: 0px;
    >div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 90%;
      height: 500px;
      padding: 20px;
      padding-bottom: 40px;    
    }
  }
  }

  @media (max-width: 600px) {
    padding: 0px;
    >h1{
      margin-top: 20px;
      margin-bottom: -15px;
      font-size: 24px;
      font-weight: bold;
    }
    >p{
      font-size: 18px;
    }
    >div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 100%;
      height: 450px;
      padding: 20px;
      padding-bottom: 40px;    
    }
  }
  }
  @media (max-width: 360px) {
    padding: 0px;
    >h1{
      margin-top: 20px;
      margin-bottom: -15px;
      font-size: 24px;
      font-weight: bold;
    }
    >p{
      font-size: 18px;
    }
    >div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 100%;
      height: 350px;
      padding: 20px;
      padding-bottom: 20px;    
    }
  }
  }

`