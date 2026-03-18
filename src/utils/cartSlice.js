import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const cartItems = [...state.cart];
      const filteredCartItems = cartItems.filter(
        (pr) => pr.id !== action.payload.id,
      );
      state.cart = filteredCartItems;
    },
    clearCart: (state) => {
      state.cart.length = 0;
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
