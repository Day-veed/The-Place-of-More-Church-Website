import { useTheme } from '@mui/material';
import React from 'react'
import styled from "styled-components"


function AppbarMobileBanner() {
    const theme = useTheme();
  return (
    <Banner>
        <Image>
        <img className='img' src='https://th.bing.com/th/id/OIP.2rPPR6RE5ZVaZ09ShsyFEgHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
        </Image>
        <BannerContent>
            <Training>LTC & MTC Training</Training>
            <Desc>Our aim is to Inspire and Empower people towards advancing the Kingdom of God</Desc>
        </BannerContent>

    </Banner>
  )
}

export default AppbarMobileBanner

const Banner = styled.div`
    display: flex;
    justify-content: center;
    border: 3px solid;
    border-color: whitesmoke;
    
`
const Image = styled.div`
    > img {
        margin-top: 83px;
    }
    
`

const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-right: 20px;
    margin-top: 95px;
    height: 190px;
`

const Training = styled.div`
    font-size: 32px;
    width: auto;
    line-height: 1.5;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 8px;
    @media (max-width: 600) {
        font-size: 14px;
        line-height: 0.5;
    }
`

const Desc = styled.div`
    font-size: 14px;
    font-style: initial;
    font-weight: bold;
    line-height: 1.55;
    letter-spacing: 1.25;
    width: auto;
    @media (max-width: 600) {
        font-size: 11px;
        line-height: 0.5;
    }
    
`
/*<div className='banner__content'>
<h2 className='banner__title'>LTC and MTC Training</h2>
<p className='banner description'> This is a training that helps people get better hhhb jbjbj bjnjojnjknjjn bjjkn njbjmnkjnjknkkkklknlknlknlknlknlknlklknlknklnlknjbjknknk klnklbjbbnk pbuibuiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuuuuuuuuuuuuuu</p>
</div>*/