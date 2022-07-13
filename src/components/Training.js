import React from 'react'
import Video from './video/video'
import Appbar from './appbar'
import CarouselContainer from './carousel/CarouselContainer'
import AppbarMobileBanner from './banner/Banner'
import Promotions from './promotions/messages'
import Images from './images/Images'
import Footer from './footer/Footer'
import AppDrawer from './drawer/AppDrawer'
import Navbar from './Navbar'

function Training() {

  return (
    <div>
        <Appbar />
        <CarouselContainer />
        {/*<AppbarMobileBanner />*/}
        <Promotions /> 
        <Video />
        <Footer />
        <AppDrawer />
    </div>
  )
}

export default Training