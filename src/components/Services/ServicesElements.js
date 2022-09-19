import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
    padding-bottom: 20px;

    @media screen and (max-width: 1000px){
        padding-top: 0px;
        height: 800px;
    }
    

    @media screen and (max-width: 768px){
        height: 1200px;
        //padding-top: 120px;
    }

    @media screen and (max-width: 580px){
        height: 1150px;
    }
`
export const ServicesWrapper = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;
    padding-top: 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        max-width: 900px;
        //padding-top: 400px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        max-width: 900px;
        //padding-top: 400px;
    }

    @media screen and (max-width: 770px) {
        grid-template-columns: 1fr;
        //padding-top: 0px;
        max-width: 500px;
        
    }
`
export const ServicesCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: lightgray;
    }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 50%;
    margin-bottom: 15px;

    @media screen and (max-width: 1000px) {
        width: 30%;
    }
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    font-family: 'EB Garamond', serif;
    color: #722f37;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1.7rem;
    font-family: 'EB Garamond', serif;
    margin-bottom: 25px;
    color: #722f37;
`
export const ServicesP = styled.p`
    font-size: 1.1rem;
    font-family: 'EB Garamond', serif;
    text-align: center;
    color: black;
`