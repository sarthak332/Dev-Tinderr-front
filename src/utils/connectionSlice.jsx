import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name : "connections",
    initialState : [],
    reducers : {
        addConnections : (state, action) => action.payload,
        removeConnections : (state, action) => [],
    }
});

export const {addConnections, removeConnections} = connectionSlice.actions;
export default connectionSlice.reducer;