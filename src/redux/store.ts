import { configureStore } from "@reduxjs/toolkit"
import favoriteReducer from "./slice/favoritePhotos"
// import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    favoritePhotos: favoriteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
