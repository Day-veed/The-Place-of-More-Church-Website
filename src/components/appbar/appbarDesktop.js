import { IconButton, ListItemText } from '@mui/material';
import React from 'react'
import "./appbarDesktop.css";
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
import Actions from '../actions';
import MenuIcon from "@mui/icons-material/Menu";
import logo from './logo.jpg';
import styled, { useThem } from "styled-components"
import { useNavigate } from 'react-router-dom';

function AppbarDesktop({ matches }) {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='header__left'>
        <h1> TPM</h1>
      </div>

      <div className='header__middle'>
          
          <MyList type="row">
            <ListItemText primary="Home" />
            <ListItemText primary="About Us" />
            <ListItemText primary="Training" onClick={() => navigate('/training')}/>
            <ListItemText primary="Give" />
            <ListItemText primary="Contact Us" />
          </MyList>
      </div>

      <div className='header__right'>
      <img src={logo} alt='' />
      
      </div>

      {/*<HeaderRight >
      <img src={logo} alt='' />
  </HeaderRight >*/}
    </div>
    /**
     * Appbar Container
     * Header
     * List
     */
    
    

    /**
     * <div className='header'>
      <div className='header__left'>
      <IconButton>
            <MenuIcon />
        </IconButton>
      </div>

      <div className='header__middle'>
          <h1> TPM</h1>
      </div>

      <div className='header__right'></div>
    </div>

    <AppbarContainer>
        <AppbarHeader>TPM</AppbarHeader>
        <MyList type="row">
            <ListItemText primary="Home" />
            <ListItemText primary="Categories" />
            <ListItemText primary="Products" />
            <ListItemText primary="Contact Us" />
        </MyList>
        <Actions matches={matches}/>
    </AppbarContainer>
     */
  )
}

export default AppbarDesktop

const HeaderRight = styled.div`
  flex: 0.15;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    
  }
`