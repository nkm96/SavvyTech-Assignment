import styled from "@emotion/styled";
import { NestedListPropsType } from "types/components/nestedList";

const ClosedAdideChildrenLinksPopupItemStyles = styled(
    "span"
)<ClosedAdideChildrenLinksPopupItemStylesPropsType>`
    .MuiMenu-list {
        padding: 0px !important;
    }

    .link {
        position: relative;
        border-radius: 16px 8px 8px 16px;
        padding: 8px 16px;
        background-color: ${({ theme, link: LinkItem }) =>
            location.pathname === LinkItem.link ? theme.palette.secondary.dark : "initial"};
        transition: 0.25s;
        z-index: 1;

        &::before {
            content: " ";
            position: absolute;
            width: 13px;
            height: calc(100% + 8px);
            border-left: solid 2px ${({ theme }) => theme.palette.primary.main};
            border-bottom: solid 2px ${({ theme }) => theme.palette.primary.main};
            border-radius: 0px 8px;
            top: -30px;
            left: -15px;
            z-index: 0;
            display: ${({ link }) => (link.level && link.level > 2 ? "none" : "initial")};
        }
    }

    .link:hover {
        background-color: ${({ theme, link: LinkItem }) =>
            location.pathname !== LinkItem.link &&
            !LinkItem.children?.length &&
            `${theme.palette.secondary.dark}55`};
    }
`;

export default ClosedAdideChildrenLinksPopupItemStyles;

interface ClosedAdideChildrenLinksPopupItemStylesPropsType {
    link: NestedListPropsType;
}
