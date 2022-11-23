import React from 'react'
import styled from 'styled-components';
import './modal.css'

function Modal({selectedImg, setSelectedImg}) {

    const handleClick = (e) => {
        /*if (e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        };*/
        setSelectedImg(null);
    }
  return (
    <Backdrop onClick={handleClick}>
      <img src={selectedImg} alt='enlarged pic' />
    </Backdrop>
  )
}

export default Modal

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: rgba(0,0,0,0.5);

    > img {
        display: block;
        max-width: 60%;
        max-height: 80%;
        margin: 60px auto;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
        //border: 3px solid white;
        @media (max-width: 1100px) {
        max-width: 90%;
        max-height: 110%;
    }
    @media (max-width: 750px) {
            grid-template-columns: 1fr;
            grid-gap: 0px;
        }
    }
`