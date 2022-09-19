import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'whitesmoke' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    //padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.div`
    display: flex;
    flex: 0.2;
    >img {
        object-fit: contain;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 5px;
        padding-right: 100px;
    }
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: darkgrey;

        &:hover {
            color: #722f37;
        }
    }
`
export const NavMenu = styled.div`
    display: flex;
    flex: 0.6;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 42px;
    padding-right: 30px;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled.div`
    color: #722f37;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-style: normal;
    font-family: Century Gothic;
    font-weight: bold;
    
    &.active {
        border-bottom: 3px solid #ffd700;
    }

    &:hover {
        color: #ffd700;
    }
`
export const NavLinkss = styled.div`
    color: #722f37;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-style: normal;
    font-family: Century Gothic;
    font-weight: bold;
    position: relative;
    float: left;

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
        padding-top: 30px;
    }

    &:hover ul{
        display: block;
        color: #ffd700;
        padding-top: 20px;
    }
`

export const NavLinksss = styled.div`
    color: #722f37;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-style: normal;
    font-family: Century Gothic;
    font-weight: bold;
    position: relative;
    float: left;

    ul li a:hover {
        background: gold;
    }

    ul li a {
        width: 105px;
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
        padding-top: 30px;
    }

    &:hover ul{
        display: block;
        color: #ffd700;
        padding-top: 20px;
    }
`


export const IconBtn = styled.div`
    display: flex;
    flex: 0.2;
    justify-content: flex-end;
    align-items: center;
    padding-left: 20px;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavIconOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    color: #722f37;
    cursor: pointer;

    &:hover {
        transition: all 0.3 ease-in-out;
        color: gold;
    }
`
export const NavOptionTitle = styled.div`
    font-size: 12px;
    font-weight: 400;
    font-family: Century Gothic;
    font-weight: bold;
`