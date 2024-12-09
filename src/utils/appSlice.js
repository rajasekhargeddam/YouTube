import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: window.innerWidth >= 750,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen =!state.isMenuOpen;
        },
        toggleClose: (state) => {
            state.isMenuOpen = false;
        },
        toggleOpen: (state) => {
            state.isMenuOpen = true;
        },
        toggleByScreenSize: (state, action) => {
            state.isMenuOpen = action.payload;
        }
        
    }
});

export const { toggleMenu , toggleClose , toggleOpen , toggleByScreenSize } = appSlice.actions;

export default appSlice.reducer;