import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import ow2 from '../body/ow2.jpg';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: whitesmoke;
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
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #0d0d0d;
    cursor: pointer;

    &:hover {
        color: gold;
        transition: 0.2s ease-in-out;
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