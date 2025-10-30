import { createSlice } from "@reduxjs/toolkit";
import { ReduxThemeStateType } from "types/config";

const initState: ReduxThemeStateType = {
    type: localStorage.getItem("themeType") || "light"
};

export const theme = createSlice({
    name: "theme",
    initialState: initState,
    reducers: {
        changeThemeType: (state: ReduxThemeStateType, actions): void => {
            state.type = state.type === "dark" ? "light" : "dark";
            actions.payload();
        }
    }
});

export const { changeThemeType } = theme.actions;
export default theme.reducer;
