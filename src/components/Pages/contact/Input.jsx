import styled from "styled-components";

export default function Input ({ type, placeholder }) {
    return <StyledInput type={type} placeholder={placeholder} />;
}

export  function Option ({ type, placeholder }) {
    return <StyledInputt type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
    background: white;//rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    margin-bottom: 0.7rem;
    border: none;
    outline: none;
    font-family: 'EB Garamond', serif;
    font-weight: bold;
    color: black;
    font-size: 20px;
`

const StyledInputt = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.7rem;
    border: none;
    outline: none;
    font-family: 'EB Garamond', serif;
    font-weight: bold;
    color: black;
    font-size: 20px;
`