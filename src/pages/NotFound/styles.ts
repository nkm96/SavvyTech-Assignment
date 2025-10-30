import styled from "@emotion/styled";
import { ReduxLayoutStateType } from "types/layout/container";

const NotFound404Styles = styled("span")<NotFound404StylesPropsType>`
    height: 100%;

    .page-container {
        height: ${({ layoutState }) =>
            `calc(100vh - ${layoutState.headerHeight} - ${layoutState.footerHeight} - 42px)`};
        flex-direction: column;
        overflow-y: auto;

        img {
            height: ${({ layoutState }) =>
                `calc(100vh - ${layoutState.headerHeight} - ${layoutState.footerHeight} - 200px)`};
        }
    }
`;

export default NotFound404Styles;

export interface NotFound404StylesPropsType {
    layoutState: ReduxLayoutStateType;
}
