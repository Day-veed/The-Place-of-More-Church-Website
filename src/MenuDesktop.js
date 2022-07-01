import React from 'react'
import { styled } from "@mui/material/styles";

function MenuDesktop() {

    const MenuContainer = styled("ul")(() => ({
        display: "flex",
        background: "#000",
        flexDirection: "column",
        padding: "8px"
    }));
    
    const DesktopMenuContainer = styled(MenuContainer)(() => ({
        flexDirection: "row",
        justifyContent: "space-evenly"
    }));
    
    const MenuItem = styled("li")(() => ({
        padding: "4px",
    }));

  return (
    <DesktopMenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
    </DesktopMenuContainer>
  );
}

/*function MenuMobile() {

    const Bar = styled("div")(() => ({
        content: "''",
        width: "30px",
        border: "1px solid #002db5",
        margin: "4px"
    }));

    return (
        <MenuContainer>
            <Bar />
            <Bar />
            <Bar />
        </MenuContainer>
    )
}*/

export default MenuDesktop 





