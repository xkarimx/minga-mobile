import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./Manga/reducer.js"
import bottomTabsReducer from './ReloadBottomsTabs/reducer'
import mangaClickReducer from "./Details/reducer"
import captureState from './Capture/reducer'


export const store = configureStore({
  reducer: {
    bottomReducer: bottomTabsReducer,
    mangaReducer: mangaReducer,
    mangaClickReducer: mangaClickReducer,
    checked: captureState
  },
  devTools: true,
});