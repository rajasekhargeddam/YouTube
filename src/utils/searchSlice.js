import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        setSearchCache: (state , action) => {
            state = Object.assign(state , action.payload);
        }
    }
});

export const { setSearchCache } = searchSlice.actions;

export default searchSlice.reducer;