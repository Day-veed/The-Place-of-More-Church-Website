import { IconButton, ListItemText } from '@mui/material';
import React from 'react'
import "./appbarDesktop.css";
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';
import Actions from '../actions';
import MenuIcon from "@mui/icons-material/Menu";

function AppbarDesktop({ matches }) {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1> TPM</h1>
      </div>

      <div className='header__middle'>
          
          <MyList type="row">
            <ListItemText primary="Home" />
            <ListItemText primary="Categories" />
            <ListItemText primary="Products" />
            <ListItemText primary="Contact Us" />
          </MyList>
      </div>

      <div className='header__right'>
          <h3>LOGO</h3>
      </div>
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