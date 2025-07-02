import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
            const existingProduct = state.find(p=>p.id === product.id);
            if(existingProduct) {
                existingProduct.quantity += 1;
            }
            else {
                state.push({...product, quantity: 1})
            }
        },

        removeFromCart(state, action) {
            const productId = action.payload;
            return state.filter(c=>c.id !== productId);
        },

        clearCart(state) {
            state.length = 0;
        },

        incrementCartProduct(state, action: PayloadAction<number>) {
            const existingProduct = state.find(p=>p.id === action.payload);
            if(existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decrementCartProduct(state, action: PayloadAction<number>) {
            const existingProduct = state.find(p=>p.id === action.payload);
            if(existingProduct) {
                if(existingProduct.quantity === 1) {
                    return state.filter(c=>c.id !== action.payload);
                } else {
                    existingProduct.quantity -= 1;
                }
            }
        },
    },
}
);

export const { addToCart, removeFromCart, clearCart, incrementCartProduct, decrementCartProduct } = cartSlice.actions;
export default cartSlice.reducer;