import React from 'react'
import CarouselContainer from '../../carousel/CarouselContainer'
import Promotions from '../../promotions/messages'
import ReactPlayer from 'react-player'
import vid from '../../video/vid.mp4'
import { motion } from 'framer-motion'
import styled from "styled-components"
import MTCHistory from '../../History/MTC'
/*import Video from './video/video'
import Appbar from './appbar'
import CarouselContainer from './carousel/CarouselContainer'
import AppbarMobileBanner from './banner/Banner'
import Promotions from './promotions/messages'
import Images from './images/Images'
import Footer from './footer/Footer'
import AppDrawer from './drawer/AppDrawer'
import Navbar from './Navbar'
import HomeBody from './body/HomeBody'*/

function Training() {
  return (
    <>
      <CarouselContainer />
      <Promotions />
      <MTCHistory />
      <H>
      <motion.div initial={{ y: 75 }} animate={{ y: 10}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
        <T>
          <h1 >Training Experience</h1>
        </T>
        
        <VideoContainer>
          <ReactPlayer 
              width='850px' 
              height='70' 
              controls 
              url={vid}
              onReady={() => console.log('onready callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={() => console.log('onError callback')} 
          />
        </VideoContainer>
      </motion.div>
      </H>
      
    </>
  )
}

export default Training

const H = styled.div`
  background: whitesmoke;
  padding: 20px;
  padding-bottom: 20px;
`  

const T = styled.div`  
    //display: block;
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    color: #722f37;
    padding-top: 20px;
    > h1 {
       
    }
`

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`