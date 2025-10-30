import SvgIcon from "@mui/material/SvgIcon";
import { NestedListPropsType } from "types/components/nestedList";
import ItemStyles from "./itemStyles";
import { Link } from "react-router-dom";

function Item({
    link,
    handleCloseMenu
}: {
    link: NestedListPropsType;
    handleCloseMenu: () => void;
}) {
    return (
        <ItemStyles
            link={link}
            onClick={() => {
                link.link !== "#" && handleCloseMenu();
            }}>
            <Link
                to={link.link}
                style={{
                    cursor: link.link !== "#" ? "poniter" : "default"
                }}>
                <div
                    className="d-f-a-c gap-8 link"
                    style={{
                        marginRight: link.level && link.level !== 2 ? `${link.level * 8}px` : "0px"
                    }}>
                    <SvgIcon component={link.icon} className="WithChildren-SvgIcon" /> {link.title}
                </div>
            </Link>
        </ItemStyles>
    );
}

export default Item;
