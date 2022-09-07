import React from 'react'
//import Appbar from './components/appbar';
import Video from '../../video/video'
import CarouselContainer from '../../carousel/CarouselContainer'
import TestimonyContainer from '../../testimony/TestimonyContainer'
import AppbarMobileBanner from '../../banner/Banner'
import Promotions from '../../promotions/messages'
import Images from '../../images/Images'
import Footer from '../../footer/Footer'
import AppDrawer from '../../drawer/AppDrawer'
import HomeBody from '../../body/HomeBody';
import Counselling from '../../Counselling/counselling';
import VideoCarousel from '../../carousel/VideoCarousel'
import HeroSection from '../../HeroSection/index'

function Home() {
  return (
    <div>
      <HeroSection />

        {/*<CarouselContainer />*/} 
        {/*<AppbarMobileBanner />*/}
        <Promotions /> 
        {/*<VideoCarousel />*/}
        <HomeBody />
        <Video />
        <Counselling />
        <TestimonyContainer />
        
        
    </div>
  )
}

export default Home