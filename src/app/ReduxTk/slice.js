import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlicer = createSlice({
  name: "cartPath",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
    },
    Remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { Add, Remove } = cartSlicer.actions;
export default cartSlicer.reducer;
