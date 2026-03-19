import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    // To add product to cart
    addCartItem: (state, action) => {
      const cartItem = { ...action.payload, productCount: 1 };
      state.cart.push(cartItem);
    },
    // To remove a product from cart
    removeCartItem: (state, action) => {
      const cartItems = [...state.cart];
      const filteredCartItems = cartItems.filter(
        (pr) => pr.id !== action.payload.id,
      );
      state.cart = filteredCartItems;
    },
    // To clear the cart
    clearCart: (state) => {
      state.cart.length = 0;
    },
    // To increment the count of the products in the cart
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
    // To decrement the count of the products in the cart
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
