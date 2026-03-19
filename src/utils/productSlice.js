import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    allProducts: [],
  },
  reducers: {
    productList: (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    },
    searchProducts: (state, action) => {
      const products = JSON.parse(JSON.stringify(state.allProducts));

      const filteredProduct = products.filter((product) => {
        if (
          product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          product.category.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          return product;
        }
      });
      console.log("dfvdbd", filteredProduct);
      state.products = filteredProduct;
    },
  },
});

export const { productList, searchProducts } = productSlice.actions;
export default productSlice.reducer;
