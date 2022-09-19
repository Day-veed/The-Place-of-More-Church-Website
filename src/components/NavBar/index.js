import React, {useState, useEffect, useRef} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, IconBtn, NavLinkss, NavLinksss} from './NavBarElements'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavIconOption from './NavIconOption';
import Dropdown from './Dropdown';
import './index.css';
import { MenuItems } from './MenuItems';
import {FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from '../body/logo.png'
//import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function Navbar({ toggle }) {

    const [open, setOpen] = useState(false);

    const [scrollNav, setScrollNav] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const [selectedOption, setSelectedOption] = useState("");

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('');
    }else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    let boxClassSubMenu = ['sub__menus'];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }


    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else {
            setDropdown(false);
        }
    };

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

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

    const MTC = () => {
        navigate('/training')
    }

    const LTC = () => {
        navigate('/LTC')
    }

    const AMTC = () => {
        navigate('/AMTC')
    }

    const TPM = () => {
        navigate('/TPM')
    }

    const PSG = () => {
        navigate('/PSG')
    }

    const ContactUs = () => {
        navigate('/contact-us')
    }

  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo onClick={() => home()}>
                <img src={logo} alt='' />
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks onClick={() => home()}>Home</NavLinks>
                </NavItem>
                <NavItem  >
                    <NavLinkss >
                    {/*<NavLinks onClick={() => aboutUs()}>AboutUs</NavLinks>*/}
                    About Us <i className='fas fa-caret-down'></i>
                        
                        
                            <ul>
                                <li><a href='#'>The Place of More</a></li>
                                <li><a href='#'>Pastor Shenny Glory</a></li>
                            </ul>
                        
                    
                        
                    </NavLinkss>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => partnership()}>Partnership</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinksss >
                        Training <i className='fas fa-caret-down'></i>
                        <ul>
                            <li><a href='#'>LTC</a></li>
                            <li><a href='#'>MTC</a></li>
                            <li><a href='#'>AMTC</a></li>
                        </ul>
                    </NavLinksss>
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

function DropdownItem(){
    return(
        <li className='dropdownItem'>
            <h6>The place of More</h6>
        </li>
    )
}

export default Navbar

/**<NavItem  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <NavLinks /*onClick={() => aboutUs()} onClick={()=>{setOpen(!open)}}>About Us <i className='fas fa-caret-down' /> 
                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <ul>
                            <DropdownItem  text = {'settings'}/>
                        </ul>
                    </div>
                    </NavLinks>
                </NavItem> 
                
                <ul className='menu-item'>
                        <li onClick={toggleSubmenu} className='menu-item sub__menus__arrows' > <Link to="#">About Us <FiChevronDown /></Link>
                            <ul className={boxClassSubMenu.join(' ')}>
                                <li> <NavLink onClick={toggleClass}
                                activeClassName='is-active' to={`/TPM`}
                                >The Place of More</NavLink></li>
                                <li> <NavLink onClick={toggleClass}
                                activeClassName='is-active' to={`/PSG`}
                                >Pastor Shenny Glory</NavLink></li>
                            </ul>
                        </li>
                        </ul>
                */