import { Button, Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from "@mui/material/styles";
import { Colors } from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

const MiddleDivider = styled((props) => (
    <Divider variants="middle" {...props} />
    ))``;

function AppDrawer() {
    const {draweropen, setDraweropen} = useUIContext();
    const navigate = useNavigate();

    const training = () => {
        navigate('/training')
    }
    const home = () => {
        navigate('/')
    }
  return (
    <>
    {draweropen && (<DrawerCloseButton onClick={() => setDraweropen(false)}>
        <CloseIcon 
            sx={{
                fontSize: '2rem',
                color: Colors.white
            }}
        />
    </DrawerCloseButton> )}
    <Drawer open={draweropen}>
    <div className='style' style={{paddingTop:'30px'}}></div>
        <List>
            <ListItemButton>
                <ListItemText onClick={() => home()}>Home</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText onClick={() => training()}>Training</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Give</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
        </List>
    </Drawer>
    </>
  )
}

export default AppDrawer