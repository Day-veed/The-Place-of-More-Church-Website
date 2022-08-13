import React from 'react'
import Logo from '../body/logo.jpg';
import Logo1 from '../body/logo1.jpg';
import Logo2 from '../body/logo2.jpg'; 
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

function Services() {
  return (
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Logo}/>
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Logo1}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Logo2}/>
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>unlock our special membership card that returns 5% cash back.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services