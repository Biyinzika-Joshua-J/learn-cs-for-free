import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "../features/themeModeSlice";
import activeTabIdxReducer from '../features/tabsSlice'
import videoTabsReducer from "../features/videoTabsSlice";
import quizeReducer from "../features/quizeSlice";
import coursesReducer from "../features/coursesSlice";

export const store = configureStore({
    reducer: {
        theme : themeModeReducer,
        tabs : activeTabIdxReducer,
        videoTabs : videoTabsReducer, 
        quize : quizeReducer,
        courses: coursesReducer,
    },
  })