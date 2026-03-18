import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";

const store = configureStore({
  reducer: {
    addProduct: productReducer,
  },
});

export default store;
