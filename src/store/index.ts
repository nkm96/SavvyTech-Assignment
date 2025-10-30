// starter file for any State Management such as redux

import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layout";
import themeReducer from "./theme";

const store = configureStore({
    reducer: {
        layout: layoutReducer,
        theme: themeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
