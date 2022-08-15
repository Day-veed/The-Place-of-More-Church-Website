import React from 'react'
import video from '../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP } from './HeroElement'

function HeroSection() {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome To</HeroH1>
            <HeroH2>The Place of More Church</HeroH2>
            <HeroP>
                When you worship with us, you learn more than just the letters of the word.
            </HeroP>
            
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection