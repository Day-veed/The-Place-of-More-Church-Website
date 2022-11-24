import React from 'react'
import './Form.css'
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Input, { Option } from './Input';
import { Button } from '@mui/material';

function Counselling() {
    //#00FFFF
  return (
    <div className='bodyy'>
        <Div>
        <CounsellingText>
            <h4 style={{color: "black"}}>Complete the form</h4>
            <h1 style={{color: "skyblue"}}>To book for an appointment or call </h1>
            <h3 style={{color: "white"}}>(+234) 8141344044</h3>
            <br/>
            <D>
            <h3 style={{color: "whitesmoke"}}>  </h3>
            </D>
        </CounsellingText>
        
        <form>
            <WelcomeText>Appointment Form</WelcomeText>
            <InputContainer className='in'>
                <Input type='text' placeholder="Name"/>
                <Input type='text' placeholder="Email"/>
                <Input type='text' placeholder="Phone Number"/>
                <Input type='text' placeholder="Reason" className="expand"/>
                {/*<select>
                    
                    <option value="Marriage">Marriage</option>
                    <option value="Finance">Finance</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Academic">Academic</option>
                    <option value="Academic">Others</option>
                    
  </select>*/}
                <div>
                <Button style={{backgroundColor:'skyblue', color: 'white', borderRadius:'25px', width: '70%',padding: '10px'}} href='https://forms.gle/4HsCLbvZTRWE6rMQ7'>Book Appointment</Button>
                </div>
            </InputContainer>
            
        </form>
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
    padding: 10px;

    @media (max-width: 1100px) {
        flex-direction: column;
    }

    >form {
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
    letter-spacing: 0.2rem;

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
    @media (max-width: 600px) {
        width: 95%;
        height: 75vh;
    }
    @media (max-width: 500px) {
        width: 95%;
        height: 70vh;
    }
    @media (max-width: 360px) {
        width: 95%;
        height: 72vh;
    }
    }
`

const D = styled.div`
    display: flex;

    >h3 {
        font-weight: 700;
        font-family: 'EB Garamond', serif;
        font-size: 28px;

        @media (max-width: 750px) {
            font-size: 22px;
            font-weight: 500;
        }

        @media (max-width: 400px) {
            font-size: 18px;
            font-weight: 300;
        }
    }

    @media (max-width: 750px) {
        display: block;
    }

    @media (max-width: 360px) {
        display: block;
        margin-bottom: -20px;
    }
`

const CounsellingText = styled.div`
    padding-right: 25px;
    padding: 10px;
    margin-left: -50px;
    margin-right: 70px;
    margin-top: -50px;

    >h1 {
            font-stretch: expanded;
            font-weight: bold;
            font-family: 'EB Garamond', serif;
            font-size: 45px;

            @media (max-width: 950px) {
            font-size: 38px;
        }
        @media (max-width: 600px) {
            font-size: 30px;
        }
        @media (max-width: 400px) {
            font-size: 25px;
            //margin-bottom: -10px;
        }
    }

    >h4{
        font-weight: bold;
        font-family: 'EB Garamond', serif;
        font-size: 50px;
        color: blue;
        margin-top: -50px;
        margin-bottom: 30px;

        @media (max-width: 1150px) {
            font-size: 45px;
            margin-top: 150px;
        }

        @media (max-width: 950px) {
            font-size: 40px;
            margin-top: 0px;
            margin-bottom: 0px;
        }
        @media (max-width: 600px) {
            font-size: 35px;
        }
        @media (max-width: 400px) {
            font-size: 28px;
            margin-bottom: 10px;
        }
    }
    >h3{
        font-weight: bold;
        font-family: 'EB Garamond', serif;
        font-size: 28px;
        color: blue;

        @media (max-width: 750px) {
            font-size: 24px;
        }
        @media (max-width: 600px) {
            font-size: 20px;
        }
        @media (max-width: 400px) {
            //font-size: 28px;
            //margin-bottom: -20px;
        }
    }margin-left: -50px;
    margin-right: 70px;

    @media (max-width: 1250px) {
        padding-top: 70px;
        padding-bottom: 30px;
        margin-left: 0px;
        margin-right: 0px;
    }

    @media (max-width: 950px) {
        padding-top: 70px;
        padding-bottom: 30px;
        margin-left: 0px;
        margin-right: 0px;

        >h1 {
            //font-stretch: expanded;
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
    margin-bottom: 5rem ;
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