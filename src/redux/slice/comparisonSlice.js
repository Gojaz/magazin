import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isChecked: {},
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
      state.isChecked = action.payload;
    }
  },
});

export const { setProducts, removeProducts, setIsChecked } =
  comparisonSlice.actions;

export default comparisonSlice.reducer;
