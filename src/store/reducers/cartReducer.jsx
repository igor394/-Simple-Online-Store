import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        addition: (state, data) => {


        },
        diminutive: (state, data) => {

        },
        remove: (state, data) => {

        }
    }
});
export const {addition, diminutive, remove} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;