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
            <p>________________________________________</p>
            
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

        <GetInTouchh>
            <h3>Quick Link</h3>
            <p>________________________________________</p>
            
            <h5>Partnership</h5>
            <h5>The Place of More</h5>
            <h5>Pastor Shenny Glory</h5>
            <Ico>
                <PhoneIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
            <Ico>
                <EmailIcon />
                <h5>Jos North, Plateau State, Nigeria.</h5>
            </Ico>
        </GetInTouchh>

        <GetInTouchhh>
            <h3>Ministry Schedule</h3>
            <p>________________________________________</p>
            
            <h4>SUNDAY</h4>
            <h5>1st Service -  4:00pm (GMT + 1)</h5>
            <h5>2nd Service -  6:00pm (GMT + 1)</h5>
            <br/>
            <h4>TUESDAY</h4>
            <h5>Lead With PSG - 2:00pm (GMT + 1) </h5>
            <br />
            <h4>THURSDAY</h4>
            <h5>Believers Service -  5:00pm (GMT + 1) </h5>
        </GetInTouchhh>
    </PreFooter>
  )
}

export default Schedule

const Img = styled.div`
display: flex;
justify-content: center;
align-items: center; 

@media screen and (max-width: 960px){
    width: 100%;
}
>img {
        object-fit: contain;
        height: 300px;
        padding: 30px;

        @media screen and (max-width: 960px){
        justify-content: center;
        align-items: center;
        height: 370px
    }
    }
`

const PreFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background: white;
    

    @media screen and (max-width: 960px){
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 20px;
    }
`
const Ico = styled.div`
    display: flex;
    padding-top: 10px;
    font-family: 'EB Garamond', serif;

    >h5 {
        font-family: 'EB Garamond', serif;
    }

    @media screen and (max-width: 960px){
        padding-top: 5px;
    }
`
const GetInTouch = styled.div`
    padding: 15px;
    font-family: 'EB Garamond', serif;

    >h3 {
        font-family: 'EB Garamond', serif;
        font-weight: bold;
        font-size: 38px;
    }
    >h4{
        font-family: 'EB Garamond', serif;
    }
    >h5{
        font-family: 'EB Garamond', serif;
    }

    @media screen and (max-width: 960px){
        padding: 10px;
    }
`

const GetInTouchh = styled.div`
    padding: 15px;
    font-family: 'EB Garamond', serif;

    >h3 {
        font-family: 'EB Garamond', serif;
        font-weight: bold;
        font-size: 38px;
    }
    >h4{
        font-family: 'EB Garamond', serif;
    }
    >h5{
        font-family: 'EB Garamond', serif;
    }

    @media screen and (max-width: 960px){
        padding: 10px;
    }
`

const GetInTouchhh = styled.div`
    padding: 15px;
    font-family: 'EB Garamond', serif;

    >h3 {
        font-family: 'EB Garamond', serif;
        font-weight: bold;
        font-size: 38px;
    }
    >h4{
        font-family: 'EB Garamond', serif;
    }
    >h5{
        font-family: 'EB Garamond', serif;
    }

    @media screen and (max-width: 960px){
        padding: 10px;
    }
`