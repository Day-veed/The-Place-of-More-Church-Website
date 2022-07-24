import React from 'react'
import styled from "styled-components"
import ow from './ow.jpg';
import { motion } from 'framer-motion'

function HomeBody() {
  return (
    <PictureExp>
      <img src={ow} alt='' />
      <motion.div initial={{ y: 75 }} animate={{ y: 10}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
      <Text>
        <h2>Welcome to The Place of More <br/>
        <h5> (Where Everything Works)</h5></h2>
        <p>The Place of More was established 1st January 2007 
          with a divine mandate to "Inspire and Empower people to discover theri their purpose to the glory of God and the advancement of His kingdom" 
          Her global headquarters is currently at old chineese bakery Dondola, Jos, Port Harcourt, Plateau State, Nigeria.</p>
      </Text>
      </motion.div>
    </PictureExp>
  )
}

export default HomeBody

const PictureExp = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center; 
    padding-bottom: 20px;
    > img {
      width: 50%
    }
    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: space-between;
      > img {
        width: 50px;
      }
    }
    
`
const Text = styled.div`
  flex-direction: column;
    > h2 {
      margin-left: 20px;
      font-style: inherit;
      font-weight: bold;
    }
    > p {
      margin-left: 20px;
      width: 95%;
      font-style: italic;
      font-size: 16px;
    }
    @media (max-width: 1200px) {
      > h3 {

      }
    }
`