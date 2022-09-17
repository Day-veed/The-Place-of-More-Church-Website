import React from 'react'
import logo from '../body/logo.jpg'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Schedule() {
  return (
    <PreFooter>
        <Img>
        <img src={logo} alt='' />
        </Img>
        
        <GetInTouch>
            <h3>Get in Touch</h3>
            <br/>
            <h5>Plot 17 Angwa Rukuba, Former Oasis bakery</h5>
            <Ico>
                <LocationOnIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
            <Ico>
                <PhoneIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
            <Ico>
                <EmailIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
        </GetInTouch>

        <GetInTouch>
            <h3>Quick Link</h3>
            <br/>
            <h5>Partnership</h5>
            <h5>About Us</h5>
            <h5>Pastor Shenny Glory</h5>
            <Ico>
                <PhoneIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
            <Ico>
                <EmailIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
        </GetInTouch>

        <GetInTouch>
            <h3>Ministry Schedule</h3>
            <br/>
            <h4>SUNDAY</h4>
            <h5>1st Service -  4:00pm (GMT + 1)</h5>
            <h5>2nd Service -  6:00pm (GMT + 1)</h5>
            <h5>Pastor Shenny Glory</h5>
            <br/>
            <h4>TUESDAY</h4>
            <h5>Lead With PSG - 2:00pm (GMT + 1) </h5>
            <br />
            <h4>THURSDAY</h4>
            <h5>Believers Service -  5:00pm (GMT + 1) </h5>
        </GetInTouch>
    </PreFooter>
  )
}

export default Schedule

const Img = styled.div`

>img {
        object-fit: contain;
        height: 300px;
    }
`

const PreFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: white;

    @media screen and (max-width: 960px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 20px;
    }
`
const Ico = styled.div`
    display: flex;
    padding-top: 30px;

    @media screen and (max-width: 960px){
        padding-top: 5px;
    }
`
const GetInTouch = styled.div`
    
    padding: 30px;

    @media screen and (max-width: 960px){
        padding: 10px;
    }
`