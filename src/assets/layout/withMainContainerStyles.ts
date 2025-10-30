import styled from "@emotion/styled";
import { WithMainContainerStylesPropsType } from "types/layout/container";

const WithMainContainerStyles = styled("span")<WithMainContainerStylesPropsType>`
    transition: 0.15s;

    .sections-container {
        display: flex;
        height: 100vh;
        min-height: 100vh;
        max-height: 100vh;
        transition: 0.15s;

        .aside-section {
            background-color: ${({ theme, layoutState }) =>
                layoutState.isMainSideContainerExist
                    ? theme.palette.mode === "dark"
                        ? theme.palette.common.black
                        : theme.palette.common.white
                    : "transparent"};
            border-radius: 8px;
            box-shadow: 0px 0px 4px 0px rgba(220, 227, 222, 0.2);
            border: ${({ theme, layoutState }) =>
                layoutState.isMainSideContainerExist
                    ? theme.palette.mode === "dark"
                        ? theme.palette.common.black
                        : "1px solid #DCE3DE"
                    : "1px solid transparent"};
            min-width: 80px !important;
            min-height: ${({ layoutState }) =>
                `calc(${layoutState.mainSideHeight} - 0px + 5px - ${layoutState.isHiddenHeader ? "0px" : "0px"} - ${layoutState.isMainSideContainerExist ? "0px" : "0px"})`};
            max-height: ${({ layoutState }) =>
                `calc(${layoutState.mainSideHeight} - 0px + 5px - ${layoutState.isHiddenHeader ? "0px" : "0px"} - ${layoutState.isMainSideContainerExist ? "0px" : "0px"})`};
            margin-top: ${({ layoutState }) => (layoutState.isHiddenHeader ? "20px" : "20px")};
            margin-left: 20px;
            margin-right: 20px;
            transition: 0.15s;
            overflow: hidden;

            .links-container {
                // height: calc(100vh - 300px);
                margin-top: 40px;
                overflow-y: auto;

                &::-webkit-scrollbar {
                    background-color: ${({ theme }) => theme.palette.action.disabled};
                    border-radius: 999px;
                    width: 4px;
                    height: 4px;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: ${({ theme }) => theme.palette.action.disabled};
                    border-radius: 999px;
                    width: 4px;
                    height: 4px;
                    min-height: 40px;
                    max-height: 40px;
                }

                /* &:hover::-webkit-scrollbar-thumb,
                &:hover::-webkit-scrollbar {
                    width: 4px;
                    height: 4px;
                } */
            }

            .aside-btn {
                border: 1px solid #151a17;
                height: 42px;
                width: 42px;
                max-width: 42px;
                min-width: 42px;
                padding: 0 !important;
                margin-left: 19px !important;
                margin-top: 8px;
            }

            .red {
                border: 1px solid #d32f2f !important;
            }
        }

        .header-main-footer-section {
            display: flex;
            flex-direction: column;
            transition: 0.15s;

            .header-section {
                padding-left: 10px;
                width: ${({ layoutState }) => `calc(${layoutState.headerWidth} - 10px)`};
                height: ${({ layoutState }) => layoutState.headerHeight};
                margin-top: 0;
                transition: 0.15s;
                overflow: hidden;
            }

            .main-section {
                position: relative;
                min-width: ${({ layoutState }) => `calc(${layoutState.mainSideWidth} - 20px)`};
                min-height: ${({ layoutState }) => layoutState.mainSideHeight};
                max-width: ${({ layoutState }) => `calc(${layoutState.mainSideWidth} - 20px)`};
                max-height: ${({ layoutState }) => layoutState.mainSideHeight};
                transition: 0.15s;
                flex-direction: column;
                // padding: 0px 0px 0px 20px;

                .main-wrapper {
                    background-color: ${({ theme, layoutState }) =>
                        layoutState.isMainSideContainerExist
                            ? theme.palette.mode === "dark"
                                ? theme.palette.common.black
                                : theme.palette.common.white
                            : "transparent"};
                    border-radius: 4px;
                    box-shadow: 0px 0px 4px 0px rgba(220, 227, 222, 0.2);
                    border: ${({ theme, layoutState }) =>
                        layoutState.isMainSideContainerExist
                            ? theme.palette.mode === "dark"
                                ? theme.palette.common.black
                                : "1px solid #DCE3DE"
                            : "1px solid transparent"};

                    min-height: ${({ layoutState }) =>
                        `calc(${layoutState.mainSideHeight} - 0px - ${layoutState.isHiddenHeader ? "0px" : "0px"} - ${layoutState.isMainSideContainerExist ? "10px" : "0px"})`};
                    max-height: ${({ layoutState }) =>
                        `calc(${layoutState.mainSideHeight} - 0px - ${layoutState.isHiddenHeader ? "0px" : "0px"} - ${layoutState.isMainSideContainerExist ? "10px" : "0px"})`};
                    min-width: ${({ layoutState }) =>
                        `calc(${layoutState.mainSideWidth} - 80px - ${layoutState.isMainSideContainerExist ? "16px" : "0px"})`};
                    max-width: ${({ layoutState }) =>
                        `calc(${layoutState.mainSideWidth} - 80px - ${layoutState.isMainSideContainerExist ? "16px" : "0px"})`};

                    overflow-y: scroll;
                    transition: 0.15s;
                    border-radius: ${({ layoutState }) =>
                        layoutState.isMainSideContainerExist ? "8px" : "0px"};
                    padding: ${({ layoutState }) =>
                        layoutState.isMainSideContainerExist ? "8px" : "0px"};
                    margin-top: ${({ layoutState }) =>
                        layoutState.isHiddenHeader ? "20px" : "20px"};

                    &::-webkit-scrollbar {
                        width: 4px;
                        height: 4px;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: ${({ theme }) => theme.palette.action.active};
                        width: 4px;
                        height: 4px;
                        min-height: 40px;
                        max-height: 40px;
                    }

                    &::-webkit-scrollbar-thumb:hover {
                        background-color: ${({ theme }) => theme.palette.action.disabled};
                    }
                }
            }

            .footer-section {
                background-color: ${({ theme }) => `${theme.palette.secondary.main}55`};
                // 12.5 is for action btns width 25px
                padding-left: 12.5px;
                width: ${({ layoutState }) => `calc(${layoutState.footerWidth} - 10px)`};
                height: ${({ layoutState }) => layoutState.footerHeight};
                transition: 0.15s;
                overflow: hidden;
            }
        }
    }
`;

export default WithMainContainerStyles;
