import "@emotion/react";
import { Theme as MuiTheme } from "@mui/material/styles";

// Define your custom theme properties
interface CustomTheme {
    customColor?: {
        main: string;
        light: string;
        dark: string;
    };
}

// Extend MUI's Theme and ThemeOptions with your custom properties
declare module "@mui/material/styles" {
    interface Theme extends MuiTheme, CustomTheme {}
    interface ThemeOptions extends MuiTheme, CustomTheme {}
}

// Extend @emotion/react's Theme with MUI's Theme
declare module "@emotion/react" {
    export interface Theme extends MuiTheme, CustomTheme {}
}
