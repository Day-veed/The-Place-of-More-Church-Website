import React from 'react'
import "./AppbarMobileHeader.css"
import { IconButton } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import styled, { useThem } from "styled-components"

function AppbarMobileHeader() {
  return (
    <div className='header'>
      <HeaderLeft>
        <IconButton>
            <MenuIcon />
        </IconButton>
      </HeaderLeft>

      <HeaderMiddle >
          <h1> TPM</h1>
      </HeaderMiddle >
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
  padding-right: 70px;
  @media (max-width: 600px) {
      margin-left: 10px;
  }
`
const HeaderLeft = styled.div`
  flex: 0.05;
  display: flex;
  align-items: center;
  padding-left: 20px;
`