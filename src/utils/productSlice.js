import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [{ name: "pranav" }],
  },
  reducers: {
    addProduct: (state, action) => {},
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
