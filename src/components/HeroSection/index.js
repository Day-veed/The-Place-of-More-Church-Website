import React from 'react'
import { Button, MainHeading, MainHeadingg } from '../globalStyles'
import video from '../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP, HeroButton, ButtonWrapper } from './HeroElement'

function HeroSection() {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <MainHeading>Welcome To</MainHeading>
            <MainHeadingg>The Place of More Church</MainHeadingg>
            <HeroP>
                When you worship with us, you learn more than just the letters of the word.
            </HeroP>
            <ButtonWrapper>
              <Button>About Us</Button>
            </ButtonWrapper>
            
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection