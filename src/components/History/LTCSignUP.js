import React, { useRef, useState } from 'react'
import useFormm from './useForm'
import validate from './validation'
import emailjs, { sendForm } from '@emailjs/browser';
import './LTCSignup.css'
import {useForm} from "react-hook-form"
import styled from 'styled-components';
import { Button } from '@mui/material';
import {  toast } from 'react-toastify';

function LTCSignUP({submitForm}) {
    const { handleChange, values, handleSubmitt, errorss, onChange } = useFormm(submitForm, validate);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [available, setAvailable] = useState('Yes');
    const [message, setMessage] = useState('');
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();


    const form = useRef();

    const sendEmail = (e) => {
      //e.preventDefault();
        const parameters = {
            email,
            name,
            number,
            available
        }
        console.log({parameters})
      
        emailjs.send('service_cniyvjp', 'template_czxpl6h', parameters, 'qy6fvb2VC_0YK6x9-')
        .then((result) => {
            notify()
            setEmail('')
            setName('')
            setNumber('')
            setAvailable('')
            setMessage('')
            console.log(result.text);
        }, (error) => {
            toast.error('something went wrong')
            console.log(error.text);
        });

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
        <FooterContainer>
      <FooterWrap>
      <h1>Fill the form to register</h1>
        <FooterLinksContainer>
            
        </FooterLinksContainer>
        
      </FooterWrap>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <WelcomeText>Registration Form</WelcomeText>
            <InputContainer className='in'>
            <input id='email' name='email' type='text' value={email} placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)} />
                {errors.email && <p className='sendMail__error'>Email is Required!</p>}

                <input id='name' name='name' type='text' value={name} placeholder=" FULL NAME" onChange={(e)=>setName(e.target.value)} />
                {errors.name && <p className='sendMail__error'>Name is Required!</p>}

                <input id='phone_number' name='phone_number' value={number} type='tel' placeholder="WHATSAPP Number" onChange={(e)=>setNumber(e.target.value)} />
                {errors.phone_number && <p className='sendMail__error'>Whatsapp Number is Required!</p>}
                
                

                <p>
                <h4>Will You Be Available For All The Trainings?</h4>
                <div>
                    Yes<input  name='radio' type="radio"  value={available} onChange={(e)=>setAvailable('Yes')}/>
                    No<input  name='radio' type="radio" value={available} onChange={(e)=>setAvailable('No')}/>
                    </div>
                </p>

                <div>
                <Button style={{backgroundColor:'#722f37', color: 'white', borderRadius:'25px', width: '50%',padding: '10px'}} type='submit' /*href='https://forms.gle/4HsCLbvZTRWE6rMQ7'*/>Submit</Button>
                </div>
            </InputContainer>
            
        </form>
    </FooterContainer>
  
    </>
  )
}

export default LTCSignUP

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
    color: #722f37;
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
        margin-top: 40px;
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
    >p{
        background: white;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
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
    background-color: whitesmoke;
    padding-top: 80px;
    padding-bottom: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;
    >form {
        border-radius: 20px;
        background: white;
        height: 83vh;
        width: 50%;
        //margin-top: -50px;
        margin-left: 100px;
        border: 1px solid #722f37;
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
        height: 95vh;
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
    //padding: 30px;
    //max-width: 1100px;
    //margin: 0 auto;
    >h1{
        font-family: 'Playfair Display', serif;
      font-weight: bold;
      color: #722f37;
      font-size: 40px;
      padding: 20px;
    }
    >h4{
      font-family: 'Playfair Display', serif;
      font-weight: bold;
      color: black;
      font-size: 20px;
      padding: 20px;
    }
    @media (max-width: 450px) {
      >h1 {
        font-size: 27px;
        margin-top: 30px;
        margin-bottom: -20px;
        padding: 0px;
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