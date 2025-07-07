import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
    favoriteIds: number[],
}

const initialState: FavoritesState = {favoriteIds: getLocalFavorites()};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<number>) {
            state.favoriteIds.push(action.payload);

            window.localStorage.setItem("favorites", JSON.stringify(state.favoriteIds));
        },
        removeFavorite(state, action: PayloadAction<number>) {
            state.favoriteIds = state.favoriteIds.filter(f=>f !== action.payload);

            window.localStorage.setItem("favorites", JSON.stringify(state.favoriteIds));
        },
        toggleFavorite(state, action: PayloadAction<number>) {
            const id = action.payload;
            if(state.favoriteIds.includes(id)) {
                state.favoriteIds = state.favoriteIds.filter(f=>f !== id);
            } else {
                state.favoriteIds.push(id);
            }

            window.localStorage.setItem("favorites", JSON.stringify(state.favoriteIds));
        },
    }
})

function getLocalFavorites(): number[] {
    const data = window.localStorage.getItem("favorites");
    if(!data) {
        return [];
    }

    try {
        const favoriteIds = JSON.parse(data);
        if(Array.isArray(favoriteIds) &&
        favoriteIds.every((id: any) => typeof id === "number")) {
            return favoriteIds;
        }
    }
    catch (error) {
        console.error(error);
        console.log(data);
    }

    return [];
}

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;