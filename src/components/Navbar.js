import React, { useState } from 'react'
import { Button } from '@mui/material'
//import './Navbar.css'
import { Link, Router } from 'react-router-dom';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false)

        const handClick = () => setClick(!click)
    return (
    <>
        <nav className='navbar'>
            <Link to='/' 
            className='navbar-logo'>
                EPIC
            </Link>
            <div className='menu-icon' onClick={handClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </nav>
    </>
  )
}

export default Navbar