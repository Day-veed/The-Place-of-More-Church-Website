import React from 'react';
//import './App.css';
import { Button, Container } from "@mui/material";
import { useEffect } from 'react';
import Training from './components/Pages/training/training';
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
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/contact/Contact';
import Navbar from './components/NavBar/index';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Partnership from './components/Pages/partnership/Partnership';
import Sidebar from './components/Sidebar';

function App() {

  useEffect(() => {
    document.title = "The Place of More - Home";
  }, []);
  return (
    <Router>
    <ThemeProvider theme={theme}>
      
        <UIProvider>
          <Navbar />
          {/*<Appbar />*/}
          <Sidebar />
          <AppDrawer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/partnership' element={<Partnership />} />
            <Route path='/training' element={<Training />} /> 
            <Route path='/contact-us' element={<Contact />} />      
          </Routes>
          <Footer />
        
        {/*<CarouselContainer /> 
        {/*<AppbarMobileBanner />
        <Promotions /> 
        <HomeBody />
        <Video />
        <TestimonyContainer />
        <Footer />
        <AppDrawer />*
        <Routes>
          {/*<Route path='/training' element={<Training />}>
              
          </Route>*
          
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