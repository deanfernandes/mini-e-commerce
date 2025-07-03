import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
    favoriteIds: number[],
}

const initialState: FavoritesState = {favoriteIds: []};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<number>) {
            state.favoriteIds.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<number>) {
            state.favoriteIds = state.favoriteIds.filter(f=>f !== action.payload);
        },
        toggleFavorite(state, action: PayloadAction<number>) {
            const id = action.payload;
            if(state.favoriteIds.includes(id)) {
                state.favoriteIds = state.favoriteIds.filter(f=>f !== id);
            } else {
                state.favoriteIds.push(id);
            }
        },
    }
})

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;