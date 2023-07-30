import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTabIdx:0,
}

const videoTabsSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        updateActiveTabIdx : (state, action) =>{
           state.activeTabIdx = action.payload
        }
    }
})

export const {updateActiveTabIdx} = videoTabsSlice.actions
export default videoTabsSlice.reducer