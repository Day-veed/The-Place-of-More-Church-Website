import { Button, Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from "@mui/material/styles";
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props) => (
    <Divider variants="middle" {...props} />
    ))``;

function AppDrawer() {
    const {draweropen, setDraweropen} = useUIContext();
  return (
    <>
    {draweropen && <DrawerCloseButton onClick={() => setDraweropen(false)}>
        <CloseIcon 
            sx={{
                fontSize: '2rem',
                color: Colors.white
            }}
        />
    </DrawerCloseButton> }
    <Drawer open={draweropen}>
        <List>
            <ListItemButton>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Categories</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Training</ListItemText>
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