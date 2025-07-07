import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

export interface CartProduct extends Product {
    quantity: number;
}

function getLocalCartProducts(): CartProduct[] {
    function isCartProduct(obj: any): obj is CartProduct {
        return (
            typeof obj === 'object' &&
            obj !== null &&
            typeof obj.id === 'number' &&
            Number.isFinite(obj.id) &&

            typeof obj.title === 'string' &&

            typeof obj.price === 'number' &&
            Number.isFinite(obj.price) &&

            typeof obj.description === 'string' &&

            typeof obj.category === 'string' &&

            typeof obj.image === 'string' &&

            typeof obj.quantity === 'number' &&
            Number.isFinite(obj.quantity)
        );
    }

    const data = window.sessionStorage.getItem("cartProducts");
    if(!data) {
        return [];
    }

    try {
        const cartProducts = JSON.parse(data);
        if(Array.isArray(cartProducts) &&
            cartProducts.every(isCartProduct)) {
                return cartProducts;
            }
    }
    catch (error) {
        console.error(error);
        console.log(data);
    }

    return [];
}

const initialState: CartProduct[] = getLocalCartProducts();

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

            window.sessionStorage.setItem("cartProducts", JSON.stringify(state));
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