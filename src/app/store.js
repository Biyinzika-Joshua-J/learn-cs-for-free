import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "../features/themeModeSlice";

export const store = configureStore({
    reducer: {
        theme : themeModeReducer,
    },
  })