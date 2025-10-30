import withMainContainer from "assets/layout/withMainContainer";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { RouteCreatorPropsType } from "types/layout/container";
import { EnumErrorCode } from "utils/enum";
import ListViewPage from "./ListManagement";
import { Dashboard_Route, ListView_Route } from "utils/config";

const routeCreator = ({ userHasAccess, path, component }: RouteCreatorPropsType) => {
    if (userHasAccess) return <Route key={path} path={path} element={component} />;
    return <Route key={path} path={path} element={<NotFound errorCode={EnumErrorCode.E403} />} />;
};

function RouteManager() {
    return (
        <ReactRoutes>
            {routeCreator({
                userHasAccess: true,
                path: ListView_Route,
                component: <ListViewPage />
            })}
            {routeCreator({
                userHasAccess: true,
                path: Dashboard_Route,
                component: <Dashboard />
            })}
            ERPcomponentsIndexPage
            <Route path="*" element={<NotFound errorCode={EnumErrorCode.E404} />} />
        </ReactRoutes>
    );
}

export default withMainContainer(RouteManager);
