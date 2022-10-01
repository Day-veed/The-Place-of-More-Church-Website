import React from 'react'
import Logo from '../body/logo.jpg';
import Logo1 from '../body/logo1.jpg';
import Logo2 from '../body/logo2.jpg'; 
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import { motion } from "framer-motion";
import { headerAnimations, headerAnimationss, headerAnimationsss, imageAnimation } from "../Animations/Animations"
import { useScroll } from '../useScroll';

function Services() {
  const [element, controls] = useScroll();
  return (
    <ServicesContainer ref={element}>
        {/*<ServicesH1>Our Services</ServicesH1>*/}
        <ServicesWrapper >
        <motion.div  variants={headerAnimations} animate={controls} transition={{delay: 0.3, type: 'spring', stiffness: 20, duration: 2}}>
          <ServicesCard>
            <ServicesIcon src={Logo}/>
            <ServicesH2>MINISTRIES</ServicesH2>
            <ServicesP>Check Out The List of Our ministries and their functions.</ServicesP>
          </ServicesCard>
          </motion.div>
          
          <ServicesCard>
            <ServicesIcon src={Logo}/>
            <ServicesH2>RESOURCES</ServicesH2>
            <ServicesP>You Can Get our Ministry Books, Videos and Audios here.</ServicesP>
          </ServicesCard>
          
          <motion.div  variants={headerAnimationsss} animate={controls} transition={{delay: 0.3, type: 'spring', stiffness: 20, duration: 2}}>
          <ServicesCard>
            <ServicesIcon src={Logo}/>
            <ServicesH2>Upper Room</ServicesH2>
            <ServicesP>Upper Room is the Children's Ministry of The Place of More.</ServicesP>
          </ServicesCard>
          </motion.div>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services