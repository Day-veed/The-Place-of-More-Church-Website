import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  return (
    <>
    <D>
      <h1>
        Contact Us
      </h1>
    </D>
    <FooterContainer>
      <FooterWrap>
      <h1>Get in touch</h1>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Address</FooterLinkTitle>
                    <FooterLink >Plot 17 Gondola Street, Angwa Rukuba, Jos, Plateau State, Nigeria.</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Address</FooterLinkTitle>
                    <FooterLink >(+234) 12345670,
                    (+234) 12345679</FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Opening Hours</FooterLinkTitle>
                    <FooterLink >
                      <h4>Monday – Friday: 4pm – 8pm</h4>
                      <h4>Saturdays: 12am – 8pm</h4>
                      <h4>Sunday: 8am – 5pm</h4>
                    </FooterLink>
                    
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>mail</FooterLinkTitle>
                    <FooterLink >theplaceofmore@tpm.org</FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        
      </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Contact

const D = styled.div`
  margin-top: 80px;
  height: 80px;
  background: #722f37;
  display: flex;
  justify-content: center;
  align-items: center;
  >h1{
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    color: gold;
  }
`

const Div = styled.div`
padding-top: 80px;
  height: 1000px;
`


export const FooterContainer = styled.footer`
    background-color: white;
    padding-top: 80px;
`
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    >h1{
      font-family: 'Playfair Display', serif;
      font-weight: bold;
      color: grey;
    }
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 40px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: skyblue;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 34px;
    margin-bottom: 16px;
    color: gold;
    font-family: 'Roboto Condensed', sans-serif;
    //font-weight: bold;
`
export const FooterLink = styled.div`
    color: #722f37;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;

    >h4{
      font-size: 16px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    }
    >h5{
      font-size: 16px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    }

    &:hover {
        color: #722f37;
        transition: 0.3s ease-in-out;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocailLogo = styled.div`
    color: #722f37;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #722f37;
    margin-bottom: 12px;
`

export const IconBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen and (max-width: 768px) {
        
    }
`
export const FooterIconOption = styled.a`
    color: #722f37;
    font-size: 24px;
`