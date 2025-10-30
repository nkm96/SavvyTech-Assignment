import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { NestedListPropsType } from "types/components/nestedList";
import { Dashboard_Route, ListView_Route } from "utils/config";

const setLevelsAndIds = (
    items: NestedListPropsType[],
    currentLevel: number = 1,
    parentId: string = ""
): NestedListPropsType[] => {
    return items.map((item, index) => {
        const id = parentId ? `${parentId}_${index}` : `${index}`;
        const updatedItem = {
            ...item,
            level: currentLevel,
            id
        };
        if (item.children) {
            updatedItem.children = setLevelsAndIds(item.children, currentLevel + 1, id);
        }
        return updatedItem;
    });
};

export const GetAsideLinksList = (): NestedListPropsType[] => {
    return setLevelsAndIds([
        {
            link: Dashboard_Route,
            userHasAccess: true,
            title: "Home",
            icon: HomeOutlinedIcon
        },
        {
            link: ListView_Route,
            userHasAccess: true,
            title: "ListView",
            icon: FormatListBulletedOutlinedIcon
        }
    ]);
};
