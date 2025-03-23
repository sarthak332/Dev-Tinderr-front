import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : 'feed',
    initialState : [],
    reducers : {
        addFeed : (state, action) => action.payload,
        removeUserFromFeed : (state, action) => {
            const newFeed = state.filter((feed)=>feed._id !=action.payload);
            console.log(newFeed);
            return newFeed;
        }
    }

});

export const {addFeed, removeUserFromFeed} = feedSlice.actions;
export default feedSlice.reducer;