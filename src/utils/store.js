import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
    reducer: {
        app: appReducer,  // This is the correct way
        search: searchSlice,
        liveChat: liveChatSlice,
    },
});

export default store;