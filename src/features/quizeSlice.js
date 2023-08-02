import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open:false,
    currentQuestion:0,
}

const quizeSlice = createSlice({
    name:'quize',
    initialState,
    reducers:{
        updateQuizeIsOpen : (state) =>{
           state.open = !state.open;
        },
        updateCurrentQuestion : (state, action) => {
            state.currentQuestion = action.payload;
        },
    }
})

export const {updateQuizeIsOpen, updateCurrentQuestion} = quizeSlice.actions
export default quizeSlice.reducer