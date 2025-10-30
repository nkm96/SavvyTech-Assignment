import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import WithMainContainerStyles from "./withMainContainerStyles";
import { closeAside } from "store/layout";
import Aside from "./aside";

const withMainContainer = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return function Container(props: P) {
        const isDeviceWidthOverThan899px = useMediaQuery<boolean>("(min-width:900px)");
        const layoutState = useSelector((state: RootState) => state.layout);
        const dispatch = useDispatch();

        useEffect(() => {
            !isDeviceWidthOverThan899px &&
                layoutState.asideStatus === "open" &&
                dispatch(closeAside());
        }, [dispatch, isDeviceWidthOverThan899px, layoutState]);

        return (
            <WithMainContainerStyles layoutState={layoutState}>
                <div className="sections-container">
                    <section className="aside-section d-f-j-c-a-c">
                        <Aside />
                    </section>

                    <section className="header-main-footer-section">
                        <section className="main-section">
                            <div className="main-wrapper">
                                <WrappedComponent {...props} />
                            </div>
                        </section>
                    </section>
                </div>
            </WithMainContainerStyles>
        );
    };
};

export default withMainContainer;
