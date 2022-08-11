import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarIconOptions, SidebarMenu } from './SidebarElements'
import { useNavigate } from 'react-router-dom';
import {IconBtn} from './SidebarElements'
import SidebarIconOption from './SidebarIconOption';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Sidebar() {

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
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={() => home()}>
                    Home
                </SidebarLink>
                <SidebarLink onClick={() => aboutUs()}>
                    About Us
                </SidebarLink>
                <SidebarLink onClick={() => partnership()}>
                    Partnership
                </SidebarLink>
                <SidebarLink onClick={() => Training()}>
                    Training
                </SidebarLink>
                <SidebarLink onClick={() => ContactUs()}>
                    Contact Us
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <IconBtn>
                    <SidebarIconOption Icon={FacebookIcon} title="Facebook" />
                    <SidebarIconOption Icon={TwitterIcon} title="Twitter" />
                    <SidebarIconOption Icon={InstagramIcon}  title="Instagram" />
                    <SidebarIconOption Icon={ YouTubeIcon} title="Youtube" />
                </IconBtn>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar