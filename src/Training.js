import React from 'react'
import { Typography, ThemeProvider } from "@mui/material";
//import "./Style";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles"
import { green, purple, red } from "@mui/material/colors"
import { theme } from "./Style";
import TrainingHeader from './TrainingHeader';

const Responsive = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("mobile")]: {
        color: green[500]
    },
    [theme.breakpoints.up("tablet")]: {
        color: purple[500]
    },
    [theme.breakpoints.up("desktop")]: {
        color: red[500]
    },
}))

function Training() {
    const [w, setW] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setW(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
  return (
    <ThemeProvider theme={theme}>
        <div className='App'>
            <Responsive>
                <Typography variant="h4">Advanced material</Typography>
                <Typography variant="h4">{w} px</Typography>
                <Typography sx={{
                    display: {
                        tablet: "none"
                    }
                }}>
                    mobile
                </Typography>
                <Typography sx={{
                    display: {
                        mobile: "none",
                        tablet: "block",
                        desktop: "none"
                    }
                }}>
                    Tablet
                </Typography>
                <Typography sx={{
                    display: {
                        mobile: "none",
                        tablet: "none", 
                        desktop: "block"
                    }
                }}>
                    Desktop
                </Typography>
            </Responsive>
            <TrainingHeader />
        </div>
    </ThemeProvider>
  )
}

export default Training