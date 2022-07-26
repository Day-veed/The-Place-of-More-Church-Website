import React from 'react'
import "./AppbarMobileHeader.css"
import { IconButton } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import styled, { useThem } from "styled-components"
import { useUIContext } from '../../context/ui';
import logo from './logo.jpg';

function AppbarMobileHeader() {

  const {setDraweropen} = useUIContext()

  return (
    <div className='header'>
      <HeaderLeft>
        <IconButton onClick={() => setDraweropen(true)}>
            <MenuIcon />
        </IconButton>
      </HeaderLeft>

      <HeaderMiddle >
          <h1> TPM</h1>
      </HeaderMiddle >

      {/*<HeaderRight >
      <img src={logo} alt='' />
  </HeaderRight >*/}
    </div>
  )
}

export default AppbarMobileHeader

const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.95;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  font-family: '"Montez", "cursive"';
  font-style: inherit;
  color: #722f37;
  @media (max-width: 600px) {
      
  }
`
const HeaderLeft = styled.div`
  flex: 0.05;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

const HeaderRight = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 150px;
    height: 150px;
    
  }
`