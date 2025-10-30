import Card from "@mui/material/Card";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import RouteManager from "pages/routes";
import { useSelector } from "react-redux";
import { RootState } from "store";
import darkTheme from "theme/dark";
import lightTheme from "theme/light";

function App() {
    const themeType = useSelector((state: RootState) => state.theme.type);

    //clean console to log objects
    if (process.env.NODE_ENV === "development") {
        console.warn = () => {};
        console.error = () => {};
    }

    return (
        <ThemeProvider theme={themeType === "dark" ? darkTheme : lightTheme}>
            <SnackbarProvider maxSnack={3}>
                <Card className="all-app-container">
                    <RouteManager />
                </Card>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
