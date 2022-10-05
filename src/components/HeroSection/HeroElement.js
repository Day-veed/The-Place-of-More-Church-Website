import styled from 'styled-components'
import {Button} from '../globalStyles'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 360px) {
        height: 525px;
    }

    /** Add :before styles */
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -0-object-fif: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: darkgoldenrod;
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const HeroH2 = styled.h1`
    color: darkred;
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-bottom: 35px;
    font-size: clamp(0.9rem, 1.5vw, 1.3rem);
    font-family: 'EB Garamond', serif;
    line-height: 24px;
    text-align: center;
    letter-spacing: 2px;
    color: darkorange;
    //margin-top: 24px;
    //color: darkorange;
    //font-size: 24px;
    //text-align: center;
    //max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroButton = styled(Button)`
    color: black;

    &:before{
        background: #fff;
        height: 500%;
    }

    &:hover:before {
        height: 0%;
    }

    &:hover {
        color: white;
    }
`
export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    gap: 0.5rem;
`;