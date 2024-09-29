import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/slice';
import {thunk} from 'redux-thunk'; 

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;