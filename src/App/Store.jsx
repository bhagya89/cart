import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/CartSlice';
import productReducer from '../Features/ProductSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    },
});

export default store;