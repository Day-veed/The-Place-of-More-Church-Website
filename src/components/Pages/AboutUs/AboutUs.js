import React from 'react'
import styled from 'styled-components'

function AboutUs() {
  return (
    <Container>
      <Content>
        <Purpose>
          <h2>PURPOSE OF THE MINISTRY</h2>
          <h6>We are a people of More, doing More for God and getting More from God.</h6>
        </Purpose>

        <Vision>
          <h2>VISION OF THE MINISTRY</h2>
          <h5>To Inspire and Empower our generation to discover their purpose and fulfil their destinies to the glory of God and the advancement of His Kingdom.</h5>
        </Vision>

        <Values>
          
          <h2>OUR CORE VALUES</h2> 

          <Section>
            <Text>
              <h3>S – Spirituality </h3>
              <p>We are committed to praying and studying the word for at least 15 minutes daily</p>
            </Text>
          </Section>
          
          <Section>
            <Text>
              <h3>P – Purpose</h3>
              <p>We are a people of More, doing More than is convenient and comfortable </p>
            </Text>
          </Section>
          
          <Section>
            <Text>
              <h3>E – Excellence </h3>
              <p>We strive to give and do our absolute best in all tasks</p>
            </Text>
          </Section>
          
          <Section>
            <Text>
              <h3>A – Adding Value </h3>
              <p>We are not just spiritual consumers, we are spiritual contributors. We Bring, We Give, We Serve.</p>
            </Text>
          </Section>
          
          <Section>
            <Text>
              <h3>K – Kingly Service</h3>
              <p>We serve excitedly and excellently with Poise and Passion.</p>
            </Text>
          </Section>
        </Values>

        <Mandate>
          <h2>OUR MANDATE </h2>
          <h4>At The Place of More, we are driven by Seven Mandates</h4>
          <h5>1.	As a Commission: To Inspire and Empower people who will glorify God and advance His kingdom on Earth </h5>
          
          <h5>2.	As a Church: To be a Place of More, doing More for God and getting More from God.</h5>
          
          
          <h5>3.	As a Family: To be a place of Love & Acceptance. Accepting people in love and helping them become BETTER and HAPPIER</h5>
          
          <h5>4.	For Leadership: To train Faithful, Fruitful and Fireful Leaders & Ministers.</h5>
          
          
          <h5>5.	For the Word: To teach the Word as a Standard for Living and teach Spiritual Truths in Simplicity.</h5>
          
          <h5>6.	For Reach Out (Evangelism): Introduce people to an experience of Christ’s Love and Power </h5>
          
          
          <h5>7.	For Family: Help start and lay the foundation for Kingdom Families.</h5>
        </Mandate>
      </Content>
    </Container>
  )
}

export default AboutUs

const Section = styled.div`
  display: flex;
`
const Text = styled.div`
  
`

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  padding-bottom: 50px;
`
const Content = styled.div`
  width: 80%;
  background: white;
  padding: 50px;
`
const Purpose = styled.div`
  padding: 20px;
`
const Vision = styled.div`
  padding: 20px;
  width: 50%;
`
const Values = styled.div`
  padding: 20px;
  width: 40%;
`
const Mandate = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`