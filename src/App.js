import React from 'react';
import './App.css';
import { Button, Container } from "@mui/material";
import { useEffect } from 'react';
import Training from './components/Training';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';
import { UIProvider } from './context/ui';

function App() {

  useEffect(() => {
    document.title = "The Place of More - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container 
      maxWidth='xl'
      sx={{
        background: '#fff'
      }}>
        <UIProvider>
         <Training />
        </UIProvider>
        {
          
          
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
