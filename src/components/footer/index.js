import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocailLogo, WebsiteRights, IconBtn } from './FooterElements';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterIconOption from './FooterIconOption';

function Footer() {
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
    <FooterContainer>
      <FooterWrap>
        {/*<FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Information</FooterLinkTitle>
                    <FooterLink onClick={() => home()}>Home</FooterLink>
                    <FooterLink onClick={() => aboutUs()}>About Us</FooterLink>
                    <FooterLink onClick={() => partnership()}>Partnership</FooterLink>
                    <FooterLink onClick={() => Training()}>Training</FooterLink>
                    <FooterLink onClick={() => ContactUs()}>Contact Us</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink onClick={() => home()}>Facebook</FooterLink>
                    <FooterLink onClick={() => aboutUs()}>Instagram</FooterLink>
                    <FooterLink onClick={() => partnership()}>Twitter</FooterLink>
                    <FooterLink onClick={() => Training()}>YouTube</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Information</FooterLinkTitle>
                    <FooterLink onClick={() => home()}>Home</FooterLink>
                    <FooterLink onClick={() => aboutUs()}>About Us</FooterLink>
                    <FooterLink onClick={() => partnership()}>Partnership</FooterLink>
                    <FooterLink onClick={() => Training()}>Training</FooterLink>
                    <FooterLink onClick={() => ContactUs()}>Contact Us</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Information</FooterLinkTitle>
                    <FooterLink onClick={() => home()}>Home</FooterLink>
                    <FooterLink onClick={() => aboutUs()}>About Us</FooterLink>
                    <FooterLink onClick={() => partnership()}>Partnership</FooterLink>
                    <FooterLink onClick={() => Training()}>Training</FooterLink>
                    <FooterLink onClick={() => ContactUs()}>Contact Us</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
  </FooterLinksContainer>*/}
        <SocialMedia>
            <SocialMediaWrap>
                <SocailLogo>
                    TPM
                </SocailLogo>
                <WebsiteRights>The Place of More © {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
                <IconBtn>
                    <FooterIconOption Icon={FacebookIcon} title="Facebook" />
                    {/*<FooterIconOption Icon={TwitterIcon} title="Twitter" />*/}
                    <FooterIconOption Icon={InstagramIcon}  title="Instagram" />
                    <FooterIconOption Icon={ YouTubeIcon} title="Youtube" />
                </IconBtn>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer


/*import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../styles/theme";


export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em',
    color: '#722f37'
}));

export const SubscribeTf = styled(TextField)(() => ({
    '.MuiInputLabel-root': {
        color: Colors.secondary
    },

    '.MuiInput-root::before': {
        borderBottom: `1px solid ${Colors.secondary}`
    }
}));*/