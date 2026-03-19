import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      const cartItem = { ...action.payload, productCount: 1 };
      state.cart.push(cartItem);
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
    incermentProductCount: (state, action) => {
      const productItems = [...state.cart];
      const updatedProductCount = productItems.filter((product) => {
        if (product.id == action.payload.id) {
          product.productCount += 1;
        }
        return product;
      });
      state.cart = updatedProductCount;
    },
    decrementProductCount: (state, action) => {
      const productItems = [...state.cart];
      const updatedProductCount = productItems.filter((product) => {
        if (product.id == action.payload.id) {
          if (product.productCount > 1) {
            product.productCount -= 1;
          }
        }
        return product;
      });
      state.cart = updatedProductCount;
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  clearCart,
  incermentProductCount,
  decrementProductCount,
} = cartSlice.actions;

export default cartSlice.reducer;
