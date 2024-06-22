// features/favoriteImages/favoriteImagesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
type FavoriteContent = {
  url: string
  title: string
}
type FavoriteImagesState = {
  images: FavoriteContent[]
}

const initialState: FavoriteImagesState = {
  images: [],
}

const favoriteImagesSlice = createSlice({
  name: "favoriteImages",
  initialState,
  reducers: {
    addFavoriteImage: (state, action: PayloadAction<FavoriteContent>) => {
      state.images.push(action.payload)
    },
  },
})

export const { addFavoriteImage } = favoriteImagesSlice.actions
export default favoriteImagesSlice.reducer
