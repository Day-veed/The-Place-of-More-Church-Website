import React from 'react'
import logo from '../body/logo.png'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Partnership from '../Pages/partnership/Partnership';
import { useNavigate } from 'react-router-dom';

function Schedule() {
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

    const MTC = () => {
        navigate('/MTC')
    }

    const LTC = () => {
        navigate('/LTC')
    }

    const AMTC = () => {
        navigate('/AMTC')
    }

    const TPM = () => {
        navigate('/TPM')
    }

    const PSG = () => {
        navigate('/PSG')
    }

    const ContactUs = () => {
        navigate('/contact-us')
    }
  return (
    <PreFooter>
        <Img>
        <img src={logo} alt='' />
        </Img>
        
        <GetInTouch>
            <h3>Get in Touch</h3>
            <p>____________________________________</p>
            
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
            <p>____________________________________</p>
            
            <h5 onClick={() => partnership()}>Partnership</h5>
            <h5 onClick={() => TPM()}>The Place of More</h5>
            <h5 onClick={() => PSG()}>Pastor Shenny Glory</h5>
            <h5 >Ministries</h5>
            <h5>Resources</h5>
            <h5>Upper Room</h5>
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
            <p>____________________________________</p>
            
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
        height: 370px;
        padding: 40px;
    }
    }
`

const PreFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background: whitesmoke;
    

    @media screen and (max-width: 1100px){
        flex-direction: column;
        justify-content: flex-start;
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

    >p {
        margin-top: -20px;
    }
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

    @media screen and (max-width: 1100px){
        padding: 10px;
        width: 80%;
        //background: white;
    }
    @media screen and (max-width: 360px){
        padding: 0px;
        width: 80%;
        margin-bottom: 25px;
        >h3{
            font-size: 34px;
        }
        //background: white;
    }
`

const GetInTouchh = styled.div`
    padding: 15px;
    font-family: 'EB Garamond', serif;
    
    >p {
        margin-top: -20px;
    }
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

        &:hover {
        color: gold;
        }
    }

    @media screen and (max-width: 1100px){
        padding: 10px;
        width: 80%;
        //background: white;
    }
    @media screen and (max-width: 360px){
        padding: 0px;
        width: 80%;
        margin-bottom: 25px;
        >h3{
            font-size: 34px;
        }
        //background: white;
    }
`

const GetInTouchhh = styled.div`
    padding: 15px;
    font-family: 'EB Garamond', serif;
    
    >p {
        margin-top: -20px;
    }
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

    @media screen and (max-width: 1100px){
        padding: 10px;
        width: 80%;
        //background: white;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 360px){
        padding: 0px;
        width: 80%;
        >h3{
            font-size: 34px;
        }
        //background: white;
    }
`