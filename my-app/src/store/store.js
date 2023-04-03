import { configureStore } from "@reduxjs/toolkit";

import mangaReducer from "./Manga/reducer.js";



export const store = configureStore({
  reducer: {
    mangas: mangaReducer,
    
  },
});