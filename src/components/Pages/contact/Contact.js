import React from 'react'
import styled from 'styled-components'
//import FacebookIcon from '@mui/icons-material/Facebook';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from '@mui/icons-material/Mail';
//import "./HeaderOption.css";
import ContactOption from './ContactOption';
import Input from './Input';
import { Button } from '@mui/material';
import './Form.css'
//import Map from './Map';

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
                <ContactOption Icon={MapIcon} />
                    <FooterLinkTitle>Address</FooterLinkTitle>
                    <FooterLink >Plot 17 Gondola Street, Angwa Rukuba,</FooterLink> 
                        <FooterLink>Jos, Plateau State, Nigeria.</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                <ContactOption Icon={AccessTimeIcon} />
                <FooterLinkTitle>Opening Hours</FooterLinkTitle>
                    <FooterLink >
                      <h4>Mondays, Wednesdays &Friday: 12pm – 8pm</h4>
                      <h4>Thursdays: 5pm – 8pm</h4>
                      <h4>Sundays: 4pm – 8pm</h4>
                    </FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
            <ContactOption Icon={PhoneIcon} />
            <FooterLinkTitle>Phone</FooterLinkTitle>
                    <FooterLink >(+234) 8141344044</FooterLink>
                    {/*<FooterLink>(+234) 12345679</FooterLink>*/}
                    
                </FooterLinkItems>
                <FooterLinkItems>
                <ContactOption Icon={MailIcon} />
                    <FooterLinkTitle>Mail</FooterLinkTitle>
                    <FooterLink >theplaceofmore@gmail.com</FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        
      </FooterWrap>
      <form>
            <WelcomeText>Contact Us</WelcomeText>
            <InputContainer>
                <Input type='text' placeholder="Name"/>
                <Input type='text' placeholder="Email"/>
                <Input type='text' placeholder="City of Residence"/>
                <Input type='text' placeholder="Message"/>

                <div>
                <Button style={{backgroundColor:'gold', color: 'white', borderRadius:'25px', width: '50%',padding: '10px'}} href='https://forms.gle/4HsCLbvZTRWE6rMQ7'>Send</Button>
                </div>
            </InputContainer>
            
        </form>
    </FooterContainer>
    {/*<section className='hidden xl:inline-flex xl:min-w-[600px]'>
        <Map />
  </section>*/}
    </>
  )
}

export default Contact

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    @media (max-width: 1300px) {
        width: 50%;
        height: 80vh;
    }
    @media (max-width: 1100px) {
        width: 55%;
        height: 80vh;
    }
    @media (max-width: 900px) {
        width: 70%;
        height: 72vh;
    }
    @media (max-width: 700px) {
        width: 80%;
        height: 75vh;
    }
`

const WelcomeText = styled.h2`
    margin-top: 3rem;
    margin-bottom: 3rem ;
    color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    @media (max-width: 360px) {
        //width: 80%;
        //height: 75vh;
        margin-top: 2rem;
        font-size: 25px;
        margin-bottom: 2rem;
    }
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    padding-top: 100px;

    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 25px;
        margin-bottom: -120px;
        @media (max-width: 360px) {
        margin-top: 15px;
        margin-bottom: -130px;
    }
    }

    >select {
        width: 80%;
        height: 3rem;
        padding: 0.7rem;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
        border-radius: 2rem;
        font-family: 'EB Garamond', serif;
        color: black;
        font-size: 20px;
    }
`
const Select = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    padding-top: 100px;
`

/*export const IconBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen and (max-width: 768px) {
        
    }
`*/
export const FooterIconOptions = styled.a`
    color: #722f37;
    font-size: 24px;
`

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
  @media (max-width: 450px) {
      >h1 {
        font-size: 35px;
      }  
    }
`

const Div = styled.div`
padding-top: 80px;
  height: 1000px;
`


export const FooterContainer = styled.footer`
    background-color: white;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    >form {
        background: grey;
        height: 70vh;
        width: 30%;
        //margin-top: -50px;
        margin-left: 100px;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        //margin-bottom: -75px;
        >form {
            height: 65vh;
            width: 80%;
            margin-left: 0px;
        }
    }
    @media (max-width: 450px) {
      >form {
        height: 68vh;
        width: 90%;
      }  
    }
`
export const FooterWrap = styled.div`
    //padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //max-width: 1100px;
    //margin: 0 auto;
    >h1{
      font-family: 'Playfair Display', serif;
      font-weight: bold;
      color: grey;
      font-size: 40px;
    }
    @media (max-width: 450px) {
      >h1 {
        font-size: 35px;
        margin-top: -30px;
        margin-bottom: -30px;
      }  
    }
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    @media screen and (max-width: 820px){
        padding-top: 32px;
        flex-direction: column;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px;
    margin-bottom: 75px;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    //pad: 10px;
    //margin: 40px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: skyblue;

    >icon {
        color: gold;
    }

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 34px;
    margin-bottom: 16px;
    color: #722f37;
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
//pk.eyJ1IjoiZGF5LXZlZWQiLCJhIjoiY2w5NGUzcXNlMDd4YjN2bXMxb2FmZ21oaSJ9.d07RWwAqysZyFyYxLqzXYA
//Style: mapbox://styles/day-veed/cl94ejyij004215o46urqlreu
//Access Token: pk.eyJ1IjoiZGF5LXZlZWQiLCJhIjoiY2w5NGUzcXNlMDd4YjN2bXMxb2FmZ21oaSJ9.d07RWwAqysZyFyYxLqzXYA