import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img404 from "assets/images/404.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store";
import { showMainSideContainer } from "store/layout";
import Styles from "./styles";
import { EnumErrorCode } from "utils/enum";

export default function NotFound(props: NotFoundProps) {
    const { errorCode } = props;
    const title = errorCode == EnumErrorCode.E404 ? "404 | Not found" : "403 | Forbidden";
    document.title = title;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showMainSideContainer());
    }, [dispatch]);

    const layoutState = useSelector((state: RootState) => state.layout);

    return (
        <Styles className="NotFoundPage-styles" layoutState={layoutState}>
            <div className="page-container d-f-j-c-a-c gap-16">
                <img src={img404} alt="404" />

                {errorCode == EnumErrorCode.E404 ? (
                    <Typography variant="h5">Error 404 | Page Not Found.</Typography>
                ) : (
                    <Typography variant="h5">Error 403 | Forbidden Page.</Typography>
                )}

                <Link to="/">
                    <Button variant="contained" color="primary">
                        Go To Main Page
                    </Button>
                </Link>
            </div>
        </Styles>
    );
}

interface NotFoundProps {
    errorCode: EnumErrorCode;
}
