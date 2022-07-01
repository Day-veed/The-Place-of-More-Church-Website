import React from 'react'
import { Box, Button, colors, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTf } from '.';
import { Colors } from '../../styles/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

function Footer() {
  return (
    <Box
        paddingTop='20px'
        marginTop='10px'
        sx={{
            background: Colors.shaft,
            color: Colors.white,
            p: {xs: 4, md: 10},
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px'}
        }}
    >
        <Grid container spacing={2} justifyContent='center'>
            <Grid item md={6} lg={4}>
                <FooterTitle variant='body1'>About us</FooterTitle>
                <Typography variant='caption2'>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Typography>
                <Box
                    sx={{
                        mt: 4,
                        color: Colors.dove_gray,
                    }}
                >
                    <FacebookIcon sx={{ mr: 1 }} />
                    <TwitterIcon sx={{ mr: 1 }} />
                    <InstagramIcon />
                </Box>
            </Grid>
            <Grid item md={6} lg={2}>
                <FooterTitle variant='body1'>information</FooterTitle>
                <List>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            About Us
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Contact
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Training
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Privacy &amp; Policy
                        </Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={2}>
                <FooterTitle variant='body1'>my account</FooterTitle>
                <List>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Login
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            My Account
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Administration
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Staff
                        </Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={4}>
                <FooterTitle variant='body1'>newsletter</FooterTitle>
                <Stack>
                    <SubscribeTf
                        color='primary'
                        label="Email address"
                        variant='standard' />
                            <Button
                            startIcon={<SendIcon sx={{ color: Colors.white }} />}
                            sx={{ mt: 4, mb: 4 }}
                            variant="contained">
                                Subscribe
                            </Button>
                        
                </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer