import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartItem: (state, action) => {},
    removeCartItem: (state, action) => {},
    clearcart: (state, action) => {},
  },
});

export default cartSlice.reducer;
