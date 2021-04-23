import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        addition: (state, data) => {
            let id = data.payload;
            if (state.value[id] === undefined) state.value[id] = 0;
            state.value[id]++;
        },
        diminutive: (state, data) => {
            let id = data.payload;
            if (state.value[id] > 1) state.value[id]--;
            else if (state.value[id] === 1) delete state.value[id];
        },
        remove: (state, data) => {
            let id = data.payload;
            delete state.value[id];
        }
    }
});
export const {addition, diminutive, remove} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;