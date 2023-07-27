import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:'light',
}

const themeModeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme : (state) =>{
            if (state.mode === 'light'){
                state.mode = 'dark'
            }else{
                state.mode = 'light'
            }
        }
    }
})

export const {toggleTheme} = themeModeSlice.actions
export default themeModeSlice.reducer