import React, { useRef } from 'react'
import styled from 'styled-components'
import './Contact.css'
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
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//import Map from './Map';

function Contact() {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const form = useRef();

  const sendEmail = (e) => {
    //e.preventDefault();
    

    emailjs.sendForm('service_nr2usqi', 'template_15kuww4', form.current, 'qy6fvb2VC_0YK6x9-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      notify()
      reset()
  };
  const notify = () => {
    toast.success('🦄 Sent!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
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
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <WelcomeText>Contact Us</WelcomeText>
            <InputContainer className='in'>
                <input id='name' name='name' type='text' placeholder="Name" {...register('name', { required: true})}/>
                {errors.name && <p className='sendMail__error'>Name is Required!</p>}
                <input id='email' name='email' type='text' placeholder="Email" {...register('email', { required: true})}/>
                {errors.email && <p className='sendMail__error'>Email is Required!</p>}
                <input id='phone_number' name='phone_number' type='number' placeholder="Phone Number" {...register('phone_number', { required: true})}/>
                {errors.phone_number && <p className='sendMail__error'>Phone Number is Required!</p>}
                <input id='city' name='city' type='text' placeholder="City of Residence" {...register('city', { required: true})}/>
                {errors.city && <p className='sendMail__error'>City of Residence is Required!</p>}
                <textarea id='message' name='message' type='text' placeholder="Message" className="expand"  {...register('message', { required: true})}/>
                {errors.message && <p className='sendMail__error'> Reason is Required! </p>}

                <div>
                <Button style={{backgroundColor:'gold', color: 'white', borderRadius:'25px', width: '50%',padding: '10px'}} type='submit' /*href='https://forms.gle/4HsCLbvZTRWE6rMQ7'*/>Send</Button>
                </div>
            </InputContainer>
            
        </form>
    </FooterContainer>
    <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            {/* Same as */}
            <ToastContainer />
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
    margin-bottom: 3rem;
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
    padding-top: 150px;
    //margin-top: 30px;

    @media (max-width: 360px) {
        margin-top: 75px;
    }

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
    padding: 20px;
    >form {
        background: grey;
        height: 83vh;
        width: 30%;
        //margin-top: -50px;
        margin-left: 100px;
    }

    @media (max-width: 1150px) {
        flex-direction: column;
        //margin-bottom: -75px;
        >form {
            height: 85vh;
            width: 55%;
            margin-left: 0px;
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        //margin-bottom: -75px;
        >form {
            height: 85vh;
            width: 70%;
            margin-left: 0px;
        }
    }
    @media (max-width: 800px) {
        flex-direction: column;
        //margin-bottom: -75px;
        >form {
            height: 85vh;
            width: 70%;
            margin-left: 0px;
        }
    }
    @media (max-width: 700px) {
        flex-direction: column;
        //margin-bottom: -75px;
        >form {
            height: 85vh;
            width: 70%;
            margin-left: 0px;
        }
    }
    @media (max-width: 600px) {
        flex-direction: column;
        //margin-bottom: -75px;
        >form {
            height: 85vh;
            width: 80%;
            margin-left: 0px;
        }
    }
    @media (max-width: 450px) {
      >form {
        height: 90vh;
        width: 100%;
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
        //margin-top: -10px;
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
        justify-content: center;
        align-items: center;
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
///Access Token: pk.eyJ1IjoiZGF5LXZlZWQiLCJhIjoiY2w5NGUzcXNlMDd4YjN2bXMxb2FmZ21oaSJ9.d07RWwAqysZyFyYxLqzXYA