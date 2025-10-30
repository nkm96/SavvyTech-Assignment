import { useTheme } from "@emotion/react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { RootState } from "store";
import { NestedListPropsType } from "types/components/nestedList";
import ClosedAdideChildrenLinksPopup from "../closedAdideChildrenLinksPopup";
import LinkItem from "../linkItem";
import WithChildrenLinkStyles from "./styles";

function WithChildrenLink({ item }: { item: NestedListPropsType }) {
    const [open, setOpen] = useState<boolean>(false);
    const layoutState = useSelector((state: RootState) => state.layout);
    const { asideStatus } = layoutState;

    const location = useLocation();

    const checkIfActiveRoute = (item: NestedListPropsType): boolean => {
        if (location.pathname === item.link) {
            return true;
        }
        if (item.children) {
            return item.children.some((child) => checkIfActiveRoute(child));
        }
        return false;
    };

    useEffect(() => {
        checkIfActiveRoute(item) ? setOpen(true) : setOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const handleClick = () => {
        setOpen(!open);
    };

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const MenuIsOpen = Boolean(menuAnchorEl);
    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setMenuAnchorEl(null);
    };
    const theme = useTheme();

    return (
        <WithChildrenLinkStyles
            layoutState={layoutState}
            withChildrenLinkItem={item}
            checkIfActiveRoute={checkIfActiveRoute}
            MenuIsOpen={MenuIsOpen}
            className="WithChildrenLink-styles">
            <List component="nav">
                <Tooltip
                    placement="left"
                    title={asideStatus === "open" ? "" : item.title}
                    children={
                        <ListItemButton
                            component={item.children ? Button : RouterLink}
                            to={item.children ? "#" : item.link}
                            aria-controls={MenuIsOpen ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={MenuIsOpen ? "true" : undefined}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                asideStatus === "close" && toggleMenu(e);
                                asideStatus === "open" && handleClick();
                            }}
                            className="d-f-j-c-a-c WithChildren-ListItemButton">
                            <ListItemIcon className="WithChildren-ListItemIcon">
                                <SvgIcon component={item.icon} className="WithChildren-SvgIcon" />
                            </ListItemIcon>

                            {asideStatus === "open" && (
                                <Fragment>
                                    <ListItemText
                                        primary={item.title}
                                        primaryTypographyProps={{
                                            fontSize: "16px"
                                        }}
                                        className="WithChildren-ListItemText"
                                    />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </Fragment>
                            )}
                        </ListItemButton>
                    }
                />

                {asideStatus === "open" && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.children?.map((child) => {
                                if (child.children)
                                    return <WithChildrenLink key={child.id} item={child} />;
                                return <LinkItem key={child.id} item={child} />;
                            })}
                        </List>
                    </Collapse>
                )}
            </List>

            <Menu
                id="basic-menu"
                anchorEl={menuAnchorEl}
                open={MenuIsOpen}
                onClose={handleCloseMenu}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
                sx={{
                    "& .MuiPaper-root": {
                        width: "300px",
                        backgroundColor: theme.palette.secondary.main,
                        padding: "0px !important",
                        border: "none",
                        // border: "solid 1px red",
                        boxShadow: "none",
                        borderRadius: "0px 8px 8px 0px",
                        marginTop: "-8px",
                        marginRight: "-35px",
                        overflow: "visible"
                    }
                }}>
                <div
                    style={{
                        paddingRight: "16px",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 4.7px 0px #FDFFFE33",
                        maxHeight: "50vh",
                        overflow: "scroll"
                    }}
                    className="links-popup-container">
                    <ClosedAdideChildrenLinksPopup
                        links={item.children}
                        handleCloseMenu={handleCloseMenu}
                    />
                </div>
            </Menu>
        </WithChildrenLinkStyles>
    );
}

export default WithChildrenLink;
