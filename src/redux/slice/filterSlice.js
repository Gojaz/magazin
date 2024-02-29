import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: {
    name: "cначала популярные",
    sortProperty: "id:asc",
  },
  activeIndex: 0,
  open: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setOpen(state, action){
      state.open = action.payload; 
    },
  },
});

export const { setSort, setActiveIndex, setOpen } = filterSlice.actions;

export default filterSlice.reducer;
