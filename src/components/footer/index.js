import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../styles/theme";


export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em',
    color: '#722f37'
}));

export const SubscribeTf = styled(TextField)(() => ({
    '.MuiInputLabel-root': {
        color: Colors.secondary
    },

    '.MuiInput-root::before': {
        borderBottom: `1px solid ${Colors.secondary}`
    }
}));