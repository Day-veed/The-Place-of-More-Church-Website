import styled from "styled-components";

export const ServicesContainer = styled.div`
    padding-bottom: 50px;

    @media screen and (max-width: 1000px){
        padding-top: 0px;
    }
    

    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 480px){
        
    }
`
export const ServicesWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div`
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    padding-bottom: 10px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        background: lightgray;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1.7rem;
    margin-bottom: 2px;
    color: #722f37;
`
export const ServicesP = styled.p`
    font-size: 1.1rem;
    text-align: center;
    color: black;
    margin-bottom: 20px;
`

export const ServicesIcon = styled.img`
    height: 300px;
    width: 80%;
    margin-bottom: 5px;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #722f37;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`