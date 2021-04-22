import {createSlice} from '@reduxjs/toolkit';
import db from '../../db/db.json';

export const goodsSlice = createSlice({
    name: 'product',
    initialState: {
        product: db
    }
});

export const selectProduct= state => state.product.product;
export default goodsSlice.reducer;