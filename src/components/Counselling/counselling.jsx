import React from 'react'
import './Form.css'
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Input from './Input';

function Counselling() {
  return (
    <div className='bodyy'>
        <Div>
        <CounsellingText>
            <h4 style={{color: "#fff"}}>You can access</h4>
            <h1 style={{color: "black"}}>INDIVIDUAL, COUPLES AND TEEN</h1>
            <h1 style={{color: "blue"}}>COUNSELLING</h1>
            <br/>
            <D>
            <h3 style={{color: "#fff"}}>Complete the form to book for an appointment or call (+234) 8012345678.</h3>
            </D>
        </CounsellingText>
        <MainContainer>
            <WelcomeText>Appointment Form</WelcomeText>
            <InputContainer>
                <Input type='text' placeholder="Name"/>
                <Input type='text' placeholder="Email"/>
                <Input type='text' placeholder="Phone Number"/>
                <Input type='text' placeholder="Message"/>
                <Input type='text' placeholder="Select"/>
            </InputContainer>
        </MainContainer>
        </Div>
    </div>

    /*<div className='form-content-right'>
      <form className='form'>
        <h1>
            Appointment Form
        </h1>
        <div className='form-inputs'>
            <label htmlFor='Name' className='form-label'>
                Name
            </label>
            <input id='Name' type='text' name='Name' className='form-input' placeholder="Enter your Name" />
        </div>
        <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>
                Email
            </label>
            <input type='email' name='email' className='form-input' placeholder="Enter your Email" />
        </div>
        <div className='form-inputs'>
            <label htmlFor='phone' className='form-label'>
                Phone Number
            </label>
            <input type='phone' name='phone' className='form-input' placeholder="Enter your Phone Number" />
        </div>
        <div className='form-inputs'>
            <label htmlFor='message' className='form-label'>
                Email
            </label>
            <input type='text' name='message' className='form-input' placeholder="Message" />
        </div>
        <div className='form-inputs'>
            <label htmlFor='select' className='form-label'>
                Email
            </label>
            <input type='select' name='select' className='form-input' placeholder="Select..." />
        </div>
        <button className='form-input-login-btn' type='submit'>
          Book Appointment
        </button>
        
      </form>
  </div>*/
  )
}

export default Counselling

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`

const D = styled.div`
    display: flex;

    >h3 {
        font-weight: bold;
        font-family: 'EB Garamond', serif;
        font-size: 28px;

        @media (max-width: 750px) {
            font-size: 28px;
        }
    }

    @media (max-width: 750px) {
        display: block;
    }
`

const CounsellingText = styled.div`
    padding-right: 50px;
    padding: 10px;

    >h1 {
            font-stretch: expanded;
            font-weight: bold;
            font-family: 'EB Garamond', serif;
            font-size: 50px;

            @media (max-width: 750px) {
            font-size: 28px;
        }
    }

    >h4{
        font-weight: bold;
        font-family: 'EB Garamond', serif;
        font-size: 28px;

        @media (max-width: 750px) {
            font-size: 28px;
        }
    }

    @media (max-width: 750px) {
        padding-top: 70px;
        padding-bottom: 30px;

        >h1 {
            font-stretch: expanded;
            font-weight: bold;
            font-family: 'EB Garamond', serif;
        }
    }
`

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
    letter-spacing: 0.4rem;

    @media (max-width: 750px) {
        width: 90%;
        height: 60vh;
    }
`

const WelcomeText = styled.h2`
    margin: 3rem 0 2rem 0;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    padding-top: 100px;
`