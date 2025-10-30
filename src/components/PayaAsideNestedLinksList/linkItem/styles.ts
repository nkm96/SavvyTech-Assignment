import styled from "@emotion/styled";
import { NestedListPropsType } from "types/components/nestedList";

const LinkItemStyles = styled("span")<LinkItemStylesPropsType>`
    .SvgIcon {
        background-color: ${({ theme, LinkItem }) =>
            location.pathname === LinkItem.link ? theme.palette.primary.main : "#F8F6F2"};
        color: ${({ theme, LinkItem }) =>
            location.pathname === LinkItem.link
                ? theme.palette.common.black
                : theme.palette.common.black} !important;
        border: 1px solid ${({ theme }) => theme.palette.primary.dark};
        padding: 8px;
        border-radius: 4px;
        z-index: 999;
    }

    .ListItemText {
        text-align: center;
        // margin-bottom: 20px;
        font-feature-settings: "ss03";
        // padding-left: 18px;
        // margin-left: -10px;
    }
`;

export default LinkItemStyles;

interface LinkItemStylesPropsType {
    LinkItem: NestedListPropsType;
}
