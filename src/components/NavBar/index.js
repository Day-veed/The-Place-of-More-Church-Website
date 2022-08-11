import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, IconBtn} from './NavBarElements'
import { NavLink, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavIconOption from './NavIconOption';

function Navbar() {

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }

    const aboutUs = () => {
        navigate('/about-us')
    }

    const partnership = () => {
        navigate('/partnership')
    }

    const Training = () => {
        navigate('/training')
    }

    const ContactUs = () => {
        navigate('/contact-us')
    }

  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo onClick={() => home()}>dolla</NavLogo>
            <MobileIcon>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks onClick={() => home()}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => aboutUs()}>About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => partnership()}>Partnership</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => Training()}>Training</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => ContactUs()}>Contact Us</NavLinks>
                </NavItem>
            </NavMenu>
            <IconBtn>
                <NavIconOption Icon={FacebookIcon} title="Facebook" />
                <NavIconOption Icon={TwitterIcon} title="Twitter" />
                <NavIconOption Icon={InstagramIcon}  title="Instagram" />
                <NavIconOption Icon={ YouTubeIcon} title="Youtube" />
            </IconBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar