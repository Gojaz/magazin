import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../units/CalcTotalPrice";
import { calcTotalCount}  from "../../units/CalcTotalCount";

const initialState = {
  item: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.item.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.item);
      state.totalCount = calcTotalCount(state.item);
    },
    minusItem(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.item);
      state.totalCount = calcTotalCount(state.item);
    },
    removeItem(state, action) {
      state.item = state.item.filter((obj) => obj.id !== action.payload);

      state.totalPrice = calcTotalPrice(state.item);
      state.totalCount = calcTotalCount(state.item);
    },
    cleatItem(state) {
      state.item = [];

      state.totalPrice = calcTotalPrice(state.item);
      state.totalCount = calcTotalCount(state.item);
    },
  },
});

export const { addItem, minusItem, removeItem, cleatItem } = cartSlice.actions;

export default cartSlice.reducer;
