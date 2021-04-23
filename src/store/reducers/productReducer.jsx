import { createSlice } from '@reduxjs/toolkit';
import db from '../../db/db.json';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: db,
        card: {},
    },
    reducers: {
        showCard: (state, action) => {
            state.card = action.payload
        },
        removeCard: (state, data) => {
            state.card = {}
        }
    }
});

export default productSlice.reducer;
export const { showCard, removeCard } = productSlice.actions;