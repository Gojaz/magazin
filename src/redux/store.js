import { configureStore } from "@reduxjs/toolkit";
import filter from './slice/filterSlice'
import cart from './slice/cartSlice'
import search from './slice/searchSlice';
import comparison from './slice/comparisonSlice'

export const store = configureStore({
    reducer:{filter, cart, search, comparison},
})