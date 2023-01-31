import React, {useState} from 'react';
//import './App.css';
import { Button, Container } from "@mui/material";
import { useEffect } from 'react';
import MTC from './components/Pages/MTC/MTC';
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
import Footer from './components/footer/index'
import AppDrawer from './components/drawer/AppDrawer'
import HomeBody from './components/body/HomeBody';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/contact/Contact';
import Navbar from './components/NavBar/index';
//import AboutUs from './components/Pages/AboutUs/AboutUs';
import Partnership from './components/Pages/partnership/Partnership';
import Sidebar from './components/Sidebar';
import Schedule from './components/ministry/Schedule';
import PSG from './components/Pages/PSG/PSG';
import TPM from './components/Pages/TPM/TPM';
import LTC from './components/Pages/LTC/LTC';
import AMTC from './components/Pages/AMTC/AMTC';
import Ministries from './components/Pages/Ministries/Ministries';
import Resources from './components/Pages/Resources/Resources';
import UpperRoom from './components/Pages/UpperRoom/UpperRoom';
import Books from './components/Pages/Resources/Books';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.title = "The Place of More - Home";
  }, []);
  return (
    <Router>
      <Helmet>
                <meta charSet="utf-8" />
                <title>TPM</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="TPM" />
            </Helmet>
    <ThemeProvider theme={theme}>
      
        <UIProvider>
        <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            {/* Same as */}
            <ToastContainer />
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          {/*<Appbar />*/}
          <AppDrawer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/partnership' element={<Partnership />} />
            <Route path='/MTC' element={<MTC />} /> 
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/TPM' element={<TPM />} />
            <Route path='/PSG' element={<PSG />} />
            <Route path='/LTC' element={<LTC />} />
            <Route path='/AMTC' element={<AMTC />} /> 
            <Route path='/Ministries' element={<Ministries />} /> 
            <Route path='/Resources' element={<Resources />} />
            <Route path='/Books' element={<Books />} /> 
            <Route path='/UpperRoom' element={<UpperRoom />} />      
          </Routes>
          <Schedule />
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