import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
//import ow2 from '../body/ow2.jpg';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #722f37;
    background-image: url(ow2);
    background-size: cover;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen })  => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: gray;

    &:hover {
        transition: all 0.3 ease-in-out;
        color: gold;
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #0d0d0d;
    cursor: pointer;
    font-family: Century Gothic;
    font-weight: bold;
    font-size: 25px;


    ul li a:hover {
        background: gold;
    }

    ul li a {
        width: 150px;
        color: #722f37;
        display: block;
        text-decoration: none;
        font-size: 14px;
        
        text-align: center;
        padding-top: 5px;
        border-radius: 10px;
        font-family: Century Gothic;
        
    } 

    ul li{
        float: none;
        list-style: none;
        padding-bottom: 10px;
    }

    ul {
        background: whitesmoke;
        border-radius: 5px;
        padding: 10px;
        position: absolute;
        display: none;
        
    }

    &.active {
        border-bottom: 3px solid #ffd700;
    }

    &:hover{
        display: block;
        color: #ffd700;
        padding-top: 10px;
    }

    &:hover ul{
        display: block;
        color: #ffd700;
        padding-top: 20px;
    }


    &:hover {
        color: gold;
        transition: 0.2s ease-in-out;
        background: whitesmoke;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const IconBtn = styled.div`
    display: flex;
    align-items: center;
`
export const SidebarIconOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: gray;
    cursor: pointer;

    &:hover {
        transition: all 0.3 ease-in-out;
        color: gold;
    }
`
export const SideLogo = styled.div`
    display: flex;
    position: absolute;
    top: -42px;
    right: 620px;
    transform: translate(-100%, 60%);
    
    >img {
        object-fit: contain;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        position: absolute;
        top: -52px;
        right: 500px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
    @media screen and (max-width: 920px) {
        position: absolute;
        top: -52px;
        right: 400px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
    @media screen and (max-width: 850px) {
        position: absolute;
        top: -52px;
        right: 350px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
    @media screen and (max-width: 770px) {
        position: absolute;
        top: -52px;
        right: 250px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
    @media screen and (max-width: 680px) {
        position: absolute;
        top: -52px;
        right: 180px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
    @media screen and (max-width: 590px) {
        position: absolute;
        top: -52px;
        right: 130px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
    @media screen and (max-width: 550px) {
        position: absolute;
        top: -52px;
        right: 80px;
        transform: translate(-100%, 60%);

        >img {
        object-fit: contain;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
        cursor: pointer;
    }
    }
`