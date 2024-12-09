import { createSlice } from '@reduxjs/toolkit';

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        liveMesseges: []
    },
    reducers: {
        addMsg: (state , action) => {
            state.liveMesseges.splice(150 , 1);
            state.liveMesseges.unshift(action.payload);
        },
    }
});

export const { addMsg } = liveChatSlice.actions;

export default liveChatSlice.reducer;