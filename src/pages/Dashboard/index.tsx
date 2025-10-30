import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showMainSideContainer } from "store/layout";
import dashboardImg from "assets/images/dashboard.svg";

export default function Dashboard() {
    const title = "Savvy App";
    document.title = title;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showMainSideContainer());
    }, [dispatch]);

    return (
        <Grid container spacing={2} mt="5px" width={"99%"}>
            <Grid item xs={12} className="d-f-j-c-a-c" mt={4}>
                <Typography variant="h3">Welcome To Savvy Dashboard!</Typography>
            </Grid>
            <Grid item xs={12} className="d-f-j-c-a-c">
                <Typography variant="h6">You Can Use The SideBar To Exploar More.</Typography>
            </Grid>

            <Grid item xs={12}>
                <br />
                <br />
                <img
                    src={dashboardImg}
                    style={{
                        display: "block",
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "30%"
                    }}
                    width="10%"
                    alt="dashboardImg"
                />
            </Grid>
        </Grid>
    );
}
