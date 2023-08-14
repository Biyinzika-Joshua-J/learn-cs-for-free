import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCourseId:'',
    progress: 0,
}

const coursesSlice = createSlice({
    name:'quize',
    initialState,
    reducers:{
        updateCurrentCourseId : (state, action) =>{
           state.currentCourseId = action.payload;
        },
        updateCourseProgress : (state) =>{
            state.progress = state.progress + 5;
         },
     
    }
})

export const {updateCurrentCourseId, updateCourseProgress} = coursesSlice.actions
export default coursesSlice.reducer