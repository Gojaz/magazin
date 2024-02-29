import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isCheckedId: false,
};

const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products.push(action.payload);
    },
    removeProducts(state, action) {
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
    },
    setIsChecked(state, action){
      const isChecked = state.isCheckedId === action.payload;
      if (isChecked) {
        state.isCheckedId = false; 
      } else {
        state.isCheckedId = action.payload;
      }
    }
  },
});

export const { setProducts, removeProducts, setIsChecked } =
  comparisonSlice.actions;

export default comparisonSlice.reducer;
