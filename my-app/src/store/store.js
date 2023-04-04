import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./Manga/reducer.js"
import bottomTabsReducer from './ReloadBottomsTabs/reducer'
import mangaClickReducer from "./Details/reducer"


export const store = configureStore({
  reducer: {
    bottomReducer: bottomTabsReducer,
    mangas: mangaReducer,
    mangaClickReducer: mangaClickReducer
    
  },
  devTools: true,
});