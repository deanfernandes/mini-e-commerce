import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

export interface CartProduct extends Product {
    quantity: number;
}

const initialState: CartProduct[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product: Product = action.payload;
            if(state.find(p=>p.id === product.id)) {
            }
            else {
                state.push({...product, quantity: 1})
            }
        },

        clearCart(state) {
            state = [];
        }
    },
}
);

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;