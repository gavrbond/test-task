import { configureStore } from "@reduxjs/toolkit"
import favoriteReducer from "./slice/favoritePhotos"

export const store = configureStore({
  reducer: {
    favoritePhotos: favoriteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
