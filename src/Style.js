//import { creatTheme} from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            laptop: 1024,
            desktop: 1200
        }
    }
});