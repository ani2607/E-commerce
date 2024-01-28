//For every feature we will be making a slice associated to it

import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'Cart',
    initialState: [],
    reducers: {
        addItem : (state,action) => {
            //Adding the old item by the spread operator and then adding a new item
            // state = [...state,action.payload];
            state.push(action.payload);
        },      
    }
});

export const { addItem } = cartSlice.actions;                   

export default cartSlice.reducer;