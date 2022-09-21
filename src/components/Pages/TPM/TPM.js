import React from 'react'
import styled from 'styled-components'
import Spiritual from './Spiritual.jpg'
import excellence from './excellence.jpg'
import value from './value.jpg'
import purpose from './purpose.jpg'
import king from './king.jpg'
import crowd from '../../body/crowd.jpg';
import Card from './Card'

function TPM() {
  return (
    <Container>
      <Content>
      <PictureExp >
      <img src={crowd} alt='' />
      <div >
      <Text >
        <h2 style={{color: "#722f37"}}>PURPOSE OF THE MINISTRY<br/></h2>
        <p style={{color: "black"}}>We are a people of More, doing More for God and getting More from God.
        We are committed to teaching the word in its simplicity and honoring God through Worship, Service, and Giving.</p>
      </Text>
      
      </div>
    </PictureExp>
    <PictureExpe >
      <div >
      <Text >
        <h2 style={{color: "gold"}}>VISION OF THE MINISTRY<br/></h2>
        
        <div></div><br/>
        <p>To Inspire and Empower our generation to discover their purpose and fulfil their destinies to the glory of God and the advancement of His Kingdom.</p>
      </Text>
      </div>
      <img src={crowd} alt='' />
    </PictureExpe>
        {/*<Top>
          <Purpose>
            <h2>PURPOSE OF THE MINISTRY</h2>
            <h6>We are a people of More, doing More for God and getting More from God.</h6>
          </Purpose>
          </Top>
          <Vision>
            <h2>VISION OF THE MINISTRY</h2>
            <h6>To Inspire and Empower our generation to discover their purpose and fulfil their destinies to the glory of God and the advancement of His Kingdom.</h6>
  </Vision>*/}
        

        <Values>
          <V>
          <h2 style={{color: "#722f37"}}>OUR CORE VALUES</h2> 
          </V>

          <Section>
            <SpiritPic>
              <img src={Spiritual} alt='' />
            </SpiritPic>
            <Textt>
              <h3 style={{color: "#722f37"}}>S – Spirituality </h3>
              <p>We are committed to praying and studying the word for at least 15 minutes daily</p>
            </Textt>
          </Section>
          
          <Section>
          <SpiritPic>
              <img src={purpose} alt='' />
            </SpiritPic>
            <Textt>
              <h3 style={{color: "#722f37"}}>P – Purpose</h3>
              <p>We are a people of More, doing More than is convenient and comfortable </p>
            </Textt>
          </Section>
          
          <Section>
          <SpiritPic>
              <img src={excellence} alt='' />
            </SpiritPic>
            <Textt>
              <h3 style={{color: "#722f37"}}>E – Excellence </h3>
              <p>We strive to give and do our absolute best in all tasks</p>
            </Textt>
          </Section>
          
          <Section>
          <SpiritPic>
              <img src={value} alt='' />
            </SpiritPic>
            <Textt>
              <h3 style={{color: "#722f37"}}>A – Adding Value </h3>
              <p>We are not just spiritual consumers, we are spiritual contributors. We Bring, We Give, We Serve.</p>
            </Textt>
          </Section>
          
          <Section>
          <SpiritPic>
              <img src={king} alt='' />
            </SpiritPic>
            <Textt>
              <h3 style={{color: "#722f37"}}>K – Kingly Service</h3>
              <p>We serve excitedly and excellently with Poise and Passion.</p>
            </Textt>
          </Section>
        </Values>

        {/*<Card 
        title='Card Title'
        imageUrl={king}
        body='normal soft'
  />*/}

        <Mandate>
          <h2>OUR MANDATE </h2>
          <Mandates>
            <Mandatess>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 1</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Commission: To Inspire and Empower people who will glorify God and advance His kingdom on Earth</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 2</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Church: To be a Place of More, doing More for God and getting More from God.</p>
                </div>
              </div>
            </div>
            </Mandatess>
            <Mandatess>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 3</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Commission: To Inspire and Empower people who will glorify God and advance His kingdom on Earth</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 4</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Church: To be a Place of More, doing More for God and getting More from God.</p>
                </div>
              </div>
            </div>
            </Mandatess>
            <Mandatess>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 5</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Commission: To Inspire and Empower people who will glorify God and advance His kingdom on Earth</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 6</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Church: To be a Place of More, doing More for God and getting More from God.</p>
                </div>
              </div>
            </div>
            </Mandatess>
            <Mandatesss>
            <div className='col-md-4'>
              <div className='card shadow'>
              <h3>Mandate 7</h3>
                <img src={king} className='w-100 border-bottom' alt='Mandate' />
                <div className='card-body'>
                  
                  <div className='underline'></div>
                  <p>As a Commission: To Inspire and Empower people who will glorify God and advance His kingdom on Earth</p>
                </div>
              </div>
            </div>
            </Mandatesss>
            </Mandates>
          {/*<h4>At The Place of More, we are driven by Seven Mandates</h4>
          <h5>1.	As a Commission: To Inspire and Empower people who will glorify God and advance His kingdom on Earth </h5>
          
          <h5>2.	As a Church: To be a Place of More, doing More for God and getting More from God.</h5>
          
          
          <h5>3.	As a Family: To be a place of Love & Acceptance. Accepting people in love and helping them become BETTER and HAPPIER</h5>
          
          <h5>4.	For Leadership: To train Faithful, Fruitful and Fireful Leaders & Ministers.</h5>
          
          
          <h5>5.	For the Word: To teach the Word as a Standard for Living and teach Spiritual Truths in Simplicity.</h5>
          
          <h5>6.	For Reach Out (Evangelism): Introduce people to an experience of Christ’s Love and Power </h5>
          
          
<h5>7.	For Family: Help start and lay the foundation for Kingdom Families.</h5>*/}
          
        </Mandate>
      </Content>
    </Container>
  )
}

export default TPM

const Top = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
`
const V =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpiritPic = styled.div`

>img{
    object-fit: cover;
    width: 130px;
    height: 27vh;
    padding-right: 20px;
  }
`

const Section = styled.div`
  display: flex;
  padding: 15px;
  background: whitesmoke;
  
  @media screen and (max-width: 960px){
    padding: 3px;
  }
`
const Textt = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;

  >h3{
    font-family: 'Playfair Display', serif;
  }
  >p{
    font-family: 'Playfair Display', serif;
  }

  @media screen and (max-width: 960px){
    padding-top: 80px;
  }
`

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding-bottom: 50px;

  @media screen and (max-width: 960px){
    padding-top: 0px;
  }
`
const Content = styled.div`
  width: 100%;
  background: white;
  
`
const Purpose = styled.div`
  padding: 20px;
  background: whitesmoke;
`
const Vision = styled.div`
  padding: 20px;
  width: 50%;

  @media screen and (max-width: 960px){
    width: 100%;
  }
`
const Values = styled.div`
  padding: 50px;
  width: 100%;
  background: whitesmoke;
  padding-bottom: 70px;
  margin-top: 50px;

  @media screen and (max-width: 960px){
    padding: 20px;
  }
`
const Mandatess = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: whitesmoke;
  padding: 25px;

  >div{
    width: 450px;
    margin: 20px;
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      >h3 {
        margin-top: 40px;
        margin-bottom: -30px;
        font-family: 'Roboto Condensed', sans-serif;
      }
      >img {
        height: 300px;
        width: 250px;
      }
      >div {
          >p{
            font-family: 'Roboto Condensed', sans-serif;
          }
        }
    }
  }

  @media screen and (max-width: 960px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`
const Mandatesss = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: whitesmoke;
  padding: 25px;

  >div{
    width: 450px;
    display: flex;
    padding-bottom: 50px;
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
      >h3 {
        margin-top: 40px;
        margin-bottom: -30px;
        font-family: 'Roboto Condensed', sans-serif;
      }
      >img {
        height: 300px;
        width: 250px;
      }
      >div {
          >p{
            font-weight: bold;
            font-family: 'Roboto Condensed', sans-serif;
          }
        }
    }
  }
`

const Mandates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  padding: 100px;

  >h5 {
    //padding: 30px;
    //color: white;
    font-family: 'Playfair Display', serif;
  }
  >h2{
    //color: #722f37;
    //padding: 30px;
    //padding-left: 190px;
    font-family: 'Playfair Display', serif;
  }
  >h4{
    //color: white;
    padding-left: 150px;
    font-family: 'Playfair Display', serif;
  }

  @media screen and (max-width: 960px){
    padding: 20px;
  }
`

const Mandate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding-bottom: 30px;

  >h5 {
    //padding: 30px;
    //color: white;
    font-family: 'Playfair Display', serif;
  }
  >h2{
    color: #722f37;
    padding-top: 50px;
    //padding-left: 190px;
    font-family: 'Playfair Display', serif;
  }
  >h4{
    //color: white;
    padding-left: 150px;
    font-family: 'Playfair Display', serif;
  }
`

const PictureExp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    padding-bottom: 20px;
    background-color: whitesmoke;
    

    > img {
      width: 45%;
      height: 450px;
      padding-left: 100px;
      
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 90%;
        height: 400px;
        padding-left: 0px;
      }
    }
`
const PictureExpe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: black;
    padding-bottom: 50px;

    > img {
      width: 45%;
      height: 450px;
      padding-right: 100px;
      
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      > img {
        width: 90%;
        height: 400px;
        padding-right: 0px;
      }
    }
`

const Text = styled.div`
  padding-left: 50px;
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
        color: white;
        font-size: 20px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    @media (max-width: 1000px) {
        padding-left: 0px;
        padding-top: 30px;
        width: 100%;
      > p {
        width: 99%;
        padding-left: 30px;
        font-size: 18px;
        font-family: 'Playfair Display', serif;
      }
    }
`