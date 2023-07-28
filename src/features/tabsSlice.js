import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTabIdx:0,
}

const tabsSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        updateActiveTabIdx : (state, action) =>{
           state.activeTabIdx = action.payload
        }
    }
})

export const {updateActiveTabIdx} = tabsSlice.actions
export default tabsSlice.reducer