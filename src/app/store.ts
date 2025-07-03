import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
    reducer: {
        cartReducer,
        favorites: favoritesReducer,
    }
},);

export type RootState = ReturnType<typeof store.getState>;