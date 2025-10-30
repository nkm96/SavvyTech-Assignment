import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function DeleteTitle() {
    return (
        <Grid container mt={0} spacing={2}>
            <Grid item xs={12}>
                <Typography>Are you sure you want to delete this item?</Typography>
                <Typography>This action is irreversible.</Typography>
            </Grid>
        </Grid>
    );
}
