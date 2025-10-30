import { NestedListPropsType } from "types/components/nestedList";
import Item from "./item";
import { Fragment } from "react/jsx-runtime";

function ClosedAdideChildrenLinksPopup({
    links,
    handleCloseMenu
}: {
    links: NestedListPropsType[] | undefined;
    handleCloseMenu: () => void;
}) {
    return (
        <div>
            {links?.map((link) => {
                return (
                    <Fragment key={link.id}>
                        <Item link={link} handleCloseMenu={handleCloseMenu} />
                        {link.children?.length && (
                            <ClosedAdideChildrenLinksPopup
                                links={link.children}
                                handleCloseMenu={handleCloseMenu}
                            />
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
}

export default ClosedAdideChildrenLinksPopup;
