import React from 'react'
import Logo from '../body/logo.jpg';
import Logo1 from '../body/logo1.jpg';
import Logo2 from '../body/logo2.jpg'; 
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

function Services() {
  return (
    <ServicesContainer>
        {/*<ServicesH1>Our Services</ServicesH1>*/}
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Logo}/>
            <ServicesH2>MINISTRIES</ServicesH2>
            <ServicesP>Check Out The List of Our ministries and their functions.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Logo1}/>
            <ServicesH2>RESOURCES</ServicesH2>
            <ServicesP>You Can Get our Ministry Books, Videos and Audios here.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Logo2}/>
            <ServicesH2>Upper Room</ServicesH2>
            <ServicesP>Upper Room is the Children's Ministry of The Place of More.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services