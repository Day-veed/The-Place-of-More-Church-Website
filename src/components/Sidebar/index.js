import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarMenu, SideLogo } from './SidebarElements'
import { useNavigate } from 'react-router-dom';
import {IconBtn} from './SidebarElements'
import SidebarIconOption from './SidebarIconOption';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../body/logo.png'
import './index.css'

function Sidebar({ isOpen, toggle }) {

    const navigate = useNavigate();

    const home = () => {
        toggle()
        navigate('/')
    }

    const aboutUs = () => {
        navigate('/about-us')
    }

    const partnership = () => {
        toggle()
        navigate('/partnership')
    }

    const MTC = () => {
        toggle()
        navigate('/MTC')
    }

    const LTC = () => {
        toggle()
        navigate('/LTC')
    }

    const AMTC = () => {
        toggle()
        navigate('/AMTC')
    }

    const TPM = () => {
        toggle()
        navigate('/TPM')
    }

    const PSG = () => {
        toggle()
        navigate('/PSG')
    }

    const Training = () => {
        toggle()
        navigate('/training')
    }

    const ContactUs = () => {
        toggle()
        navigate('/contact-us')
    }

  return (
    <SidebarContainer isOpen={isOpen} >
        <SideLogo onClick={() => home()}>
            <img src={logo} alt='' />
        </SideLogo>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={() => home() }>
                    Home
                </SidebarLink>
                <SidebarLink>
                About Us <i className='fas fa-caret-down'></i>
                            <ul>
                                <li onClick={() => TPM()}><a href='#'>The Place of More</a></li>
                                <li onClick={() => PSG()}><a href='#'>Pastor Shenny Glory</a></li>
                            </ul>
                </SidebarLink>
                <SidebarLink onClick={() => partnership()} >
                    Partnership
                </SidebarLink>
                <SidebarLink>
                Training <i className='fas fa-caret-down'></i>
                        <ul>
                            <li onClick={() => LTC()}><a href='#'>LTC</a></li>
                            <li onClick={() => MTC()}><a href='#'>MTC</a></li>
                            {/*<li onClick={() => AMTC()}><a href='#'>AMTC</a></li>*/}
                        </ul>
                </SidebarLink>
                <SidebarLink onClick={() => ContactUs()} >
                    Contact Us
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <IconBtn>
                    <a href="https://www.facebook.com/Theplaceofmore/">
                        <SidebarIconOption Icon={FacebookIcon} title="Facebook" />
                    </a>
                    <a href="https://t.me/theeveningchurchTPM">
                        <SidebarIconOption Icon={TelegramIcon} title="Telegram" />
                    </a>
                        <a href="https://instagram.com/theeveningchurch_tpm?igshid=YmMyMTA2M2Y=">
                    <SidebarIconOption Icon={InstagramIcon}  title="Instagram" />
                    </a>
                        <a href="https://www.youtube.com/channel/UCVm83thLs-WavYc5ANXitFw">
                    <SidebarIconOption Icon={ YouTubeIcon} title="Youtube" />
                    </a>
                </IconBtn>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar