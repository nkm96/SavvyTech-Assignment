export const getConfig = () => {
    return {
        VITE_REACT_APP_API_BASE_URL: window.env?.VITE_REACT_APP_API_BASE_URL || "http://127.0.0.1/",
        VITE_REACT_APP_LOGIN_URL: window.env?.VITE_REACT_APP_LOGIN_URL || "http://127.0.0.1/"
    };
};
