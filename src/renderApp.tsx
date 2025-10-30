import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import { prefixer } from "stylis";
import App from "./App.tsx";
import "./GLOBAL_STYLES.css";

const cacheLtR = createCache({
    key: "muiltr",
    stylisPlugins: [prefixer]
});

export const renderApp = () => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <CacheProvider value={cacheLtR}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </CacheProvider>
    );
};
