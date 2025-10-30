import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { closeAside, openAside } from "store/layout";
import { GetAsideLinksList } from "./asideLinksList";
import SavvyAsideNestedLinksList from "components/PayaAsideNestedLinksList";

function Aside() {
    const isDeviceWidthOverThan900px = useMediaQuery<boolean>("(min-width:900px)");
    const layoutState = useSelector((state: RootState) => state.layout);
    const { asideStatus } = layoutState;
    const dispatch = useDispatch();
    const asideLinksList = GetAsideLinksList();

    return (
        <div
            style={{
                position: "relative",
                flexDirection: "column",
                width: "100%",
                height: "100%"
            }}>
            <Box
                className="d-f-j-c-a-c"
                sx={{
                    mt: asideStatus !== "minimize" ? "60px" : "0px",
                    mx: asideStatus !== "minimize" ? "38px" : "0px",
                    height: "50px",
                    position: "relative"
                }}>
                {isDeviceWidthOverThan900px ? (
                    <IconButton
                        color="success"
                        sx={{
                            position: asideStatus === "minimize" ? "absolute" : "static",
                            top: "50px",
                            left: "4px"
                        }}
                        onClick={() => {
                            if (asideStatus === "minimize" || asideStatus === "close") {
                                dispatch(openAside());
                                localStorage.setItem("asideStatus", "open");
                            } else {
                                dispatch(closeAside());
                                localStorage.setItem("asideStatus", "close");
                            }
                        }}></IconButton>
                ) : (
                    <></>
                )}
            </Box>

            <div className="links-container">
                <SavvyAsideNestedLinksList links={asideLinksList} />
            </div>
        </div>
    );
}

export default Aside;
