import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "../features/themeModeSlice";
import activeTabIdxReducer from '../features/tabsSlice'

export const store = configureStore({
    reducer: {
        theme : themeModeReducer,
        tabs : activeTabIdxReducer,
    },
  })