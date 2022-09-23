import React from 'react'
import styled from 'styled-components'
import Psg from './PSG.jpg'

function PSG() {
  return (
    <Div>
    <About> 
    <PictureExp >
      <img src={Psg} alt='' />
      
      <Text >
        <p>Pastor Shenny Glory is the Lead Pastor at The Place of MORE Church (TPM), Jos, Plateau State, Nigeria. </p>

        <p>Pastor Shenny is a Leadership Expert and Coach who have trained over 200 Individuals into Leaders and Ministers through TPM Institute of Leadership. </p>

        <p>He is a graduate of University of Jos, Plateau State, Nigeria where he bagged his Bachelors Degree in Business Management alongside other certifications in Leadership. </p>

        <p>As a Pastor,  he has since led numerous souls to Christ and also helped them discover their purpose to the glory of God and the advancement of his Kingdom. </p>

        <p>PSG of MORE, as he is also known, fervently believes that the gospel should be taught in its simplicity, hence, his messages, teachings and books are easily comprehended. </p>

        <p>He occupies numerous positions on the Board of Trustees of several organizations as a result of his sterling Business Management skills and Leadership Capabilities. </p>
                {/*<h2 style={{color: "#722f37"}}>PURPOSE OF THE MINISTRY<br/></h2>
                <p style={{color: "black"}}>We are a people of More, doing More for God and getting More from God.
          We are committed to teaching the word in its simplicity and honoring God through Worship, Service, and Giving.</p>*/}
      </Text>  
    </PictureExp> 
    <PictureExpe >
      
      <Textt >
        <p>He is also passionate about rewarding excellence and putting smiles on the faces of people and he does this through his Foundation, Shenny Glory Foundation. </p>

        <p>He has authored several books on Spirituality, Relationship, Life and Kingdom Principles.</p>
                {/*<h2 style={{color: "#722f37"}}>PURPOSE OF THE MINISTRY<br/></h2>
                <p style={{color: "black"}}>We are a people of More, doing More for God and getting More from God.
          We are committed to teaching the word in its simplicity and honoring God through Worship, Service, and Giving.</p>*/}
      </Textt>  
      <img src={Psg} alt='' />
    </PictureExpe>

<Sgf>
<h1 style={{color: "#722f37"}}>SHENNY GLORY FOUNDATION (SGF)</h1>
<p>Shenny Glory Foundation is the brainchild of Pastor Shenny Glory, the Lead Pastor at The Place of More Church, Mentor and Business Strategist</p>
<p>It is committed to rewarding Excellence, Restoring Hope and positively adding values to impact the lives of the people.</p>
</Sgf>
    </About>
    </Div>
  )
}

export default PSG

const Sgf = styled.div`
  background: whitesmoke;
  padding: 50px;

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
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: whitesmoke;
  //padding: 10px;
  padding-top: 130px;

  >p {
    font-size: 20px;
        font-family: 'Roboto Condensed', sans-serif;
  }

  >h1 {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
  }

  @media screen and (max-width: 900px){
    padding-top: 100px;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
  background: white;
  padding-top: 80px;

  @media screen and (max-width: 600px){
    padding: 0px;
  }
`
const PictureExp = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    padding-bottom: 70px;
    background-color: white;
    margin-top: -100px;
    background: whitesmoke;
    
    > img {
      width: 75%;
      height: 700px;
      padding-left: 100px;
      padding-bottom: 40px;
      
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 80%;
        height: 590px;
        padding-left: 0px;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 95%;
        height: 550px;
        padding-left: 0px;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px;
      padding-bottom: 50px;
      > img {
        width: 80%;
        height: 590px;
        padding-left: 0px;
      }
    }
`
const PictureExpe = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    padding-bottom: 70px;
    background-color: white;
    margin-top: -100px;
    
    > img {
      width: 75%;
      height: 700px;
      padding-left: 100px;
      padding-bottom: 40px;
      
    }
  
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 80%;
        height: 590px;
        padding-left: 0px;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 95%;
        height: 550px;
        padding-right: 0px;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px;
      padding-bottom: 50px;
      > img {
        width: 100%;
        height: 550px;
        padding-right: 0px;
      }
    }
`

const Text = styled.div`
  padding-left: 10px;
  padding-top: 70px;
  width: 85%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Playfair Display', serif;
        font-style: inherit;
        font-weight: bold;
    }
    > p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 55px;
        color: black;
        font-size: 18px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    @media (max-width: 1000px) {
        padding-left: 0px;
        padding-top: 30px;
        width: 100%;
      > p {
        width: 100%;
        padding-left: 0px;
        font-size: 18px;
        margin-top: -20px;
        //font-family: 'Playfair Display', serif;
      }
    }
    @media (max-width: 600px) {
        padding-left: 0px;
        padding-top: 30px;
        width: 100%;
      > p {
        padding-top: 15px;
        //font-family: 'Playfair Display', serif;
      }
    }
`
const Textt = styled.div`
  padding-left: 10px;
  padding-top: 120px;
  width: 70%;
  
    > h2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Playfair Display', serif;
        font-style: inherit;
        font-weight: bold;
    }
    > p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 55px;
        color: black;
        font-size: 18px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    @media (max-width: 1000px) {
        padding-left: 0px;
        padding-top: 30px;
        width: 100%;
      > p {
        width: 100%;
        padding-left: 0px;
        font-size: 18px;
        margin-top: -20px;
        //font-family: 'Playfair Display', serif;
      }
    }
`