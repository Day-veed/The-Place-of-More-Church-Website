import React from 'react';
import './App.css';
import { Button, Container } from "@mui/material";
import { useEffect } from 'react';
import Training from './components/Training';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';
import { UIProvider } from './context/ui';
import Video from './components/video/video'
import CarouselContainer from './components/carousel/CarouselContainer'
import AppbarMobileBanner from './components/banner/Banner'
import Promotions from './components/promotions/messages'
import Images from './components/images/Images'
import Footer from './components/footer/Footer'
import AppDrawer from './components/drawer/AppDrawer'
import HomeBody from './components/body/HomeBody';

function App() {

  useEffect(() => {
    document.title = "The Place of More - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      
        <UIProvider>
        <Appbar />
        <CarouselContainer />
        {/*<AppbarMobileBanner />*/}
        <Promotions /> 
        <HomeBody />
        <Video />
        <Footer />
        <AppDrawer />
         {/*<Training />*/}
        </UIProvider>
        {
          
          
        }
      
    </ThemeProvider>
  );
}

export default App;
