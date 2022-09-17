import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import styled, { useThem } from "styled-components"


const messages = [
    "You are welcome to the TPM family",
    "We develop World Class Leaders",
    "We Inspire and Empower"
];

export default function Promotions() {
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        },3000);

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)

            setShow(true);
            setTimeout(() => {
                setShow(false)
            },3000)
        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);
    return (
        <PromotionsContainer>
            <Slide direction={show ? "left" : "right"} in={show}
            timeout={{
                enter: 500,
                exit: 100
            }}
            >
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
            </Slide>
        </PromotionsContainer>
    )
}

const PromotionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-width: auto;
    padding: 20px 0px 20px 0px;
    overflow: hidden;
    background-color: #722f37;
    
    @media (min-width: md) {
        padding: 40px 0px 40px 0px;
    }
`

const MessageText = styled.div`
    font-family: Montez, cursive;
    color: white;
    font-size: 1.5rem;
    @media (min-width: md) {
        font-size: 3rem;
    }
`