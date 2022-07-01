import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import matchers from "@testing-library/jest-dom/matchers";
import { MyList, ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../styles/appbar";

export default function Actions({matches}) {
    const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

    return (
        <Component>
            <MyList typeof="row">
                <ListItemButton
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                }}
                ></ListItemButton>
            </MyList>
        </Component>
    )
}