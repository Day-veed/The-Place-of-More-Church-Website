import React from 'react';
import './App.css';
import { Button, Container } from "@mui/material";
import { useEffect } from 'react';
import Training from './components/training/training';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';
import { UIProvider } from './context/ui';
import Video from './components/video/video'
import CarouselContainer from './components/carousel/CarouselContainer'
import TestimonyContainer from './components/testimony/TestimonyContainer'
import AppbarMobileBanner from './components/banner/Banner'
import Promotions from './components/promotions/messages'
import Images from './components/images/Images'
import Footer from './components/footer/Footer'
import AppDrawer from './components/drawer/AppDrawer'
import HomeBody from './components/body/HomeBody';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';

function App() {

  useEffect(() => {
    document.title = "The Place of More - Home";
  }, []);
  return (
    <Router>
    <ThemeProvider theme={theme}>
      
        <UIProvider>
        <Appbar />
        <Home />
        {/*<CarouselContainer /> 
        {/*<AppbarMobileBanner />
        <Promotions /> 
        <HomeBody />
        <Video />
        <TestimonyContainer />
        <Footer />
        <AppDrawer />*/}
        <Routes>
          {/*<Route path='/training' element={<Training />}>
              
          </Route>*/}
          <Route path='/' element={<Home />}> 
                
          </Route>
        </Routes>
         {/*<Training />*/}
        </UIProvider>
        {
          
          
        }
      
    </ThemeProvider>
    </Router>
  );
}

export default App;