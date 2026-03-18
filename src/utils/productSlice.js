import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {
    productList: (state, action) => {
      state.product = action;
    },
  },
});

export const { productList } = productSlice.actions;
export default productSlice.reducer;
