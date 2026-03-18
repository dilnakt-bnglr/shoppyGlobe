import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartItem: (state, action) => {},
    removeCartItem: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
