import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: '',
};

const coffeSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {addCart} = coffeSlice.actions;
export default coffeSlice.reducer;
