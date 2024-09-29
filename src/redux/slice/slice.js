import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: null,
    category: null
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.category = action.payload;
        },
        getProduct: (state, action) => {
            state.product = action.payload;
        }
    },
});

export const { getCategory ,getProduct} = productSlice.actions;
export default productSlice.reducer;