import React from 'react'
import styled from 'styled-components'

function PSG() {
  return (
    <Div>
    <About>  
<p>Pastor Shenny Glory is the Lead Pastor at The Place of MORE Church (TPM), Jos, Plateau State, Nigeria. </p>

<p>Pastor Shenny is a Leadership Expert and Coach who have trained over 200 Individuals into Leaders and Ministers through TPM Institute of Leadership. </p>

<p>He is a graduate of University of Jos, Plateau State, Nigeria where he bagged his Bachelors Degree in Business Management alongside other certifications in Leadership. </p>

<p>As a Pastor,  he has since led numerous souls to Christ and also helped them discover their purpose to the glory of God and the advancement of his Kingdom. </p>

<p>PSG of MORE, as he is also known, fervently believes that the gospel should be taught in its simplicity, hence, his messages, teachings and books are easily comprehended. </p>

<p>He occupies numerous positions on the Board of Trustees of several organizations as a result of his sterling Business Management skills and Leadership Capabilities. </p>

<p>He is also passionate about rewarding excellence and putting smiles on the faces of people and he does this through his Foundation, Shenny Glory Foundation. </p>

<p>He has authored several books on Spirituality, Relationship, Life and Kingdom Principles.</p>






<h1>SHENNY GLORY FOUNDATION (SGF)</h1>
<p>Shenny Glory Foundation is the brainchild of Pastor Shenny Glory, the Lead Pastor at The Place of More Church, Mentor and Business Strategist</p>
<p>It is committed to rewarding Excellence, Restoring Hope and positively adding values to impact the lives of the people.</p>
    </About>
    </Div>
  )
}

export default PSG

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: whitesmoke;
  padding: 40px;

  >p {
    font-family: 'Playfair Display', serif;
  }

  >h1 {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  padding-top: 130px;

`