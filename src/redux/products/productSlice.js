import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  detail: {},
  productByName: {},
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState: initialState,

  reducers: {
    getAllProducts: (state = initialState, action) => {
      state.products = action.payload;
    },
    getProductByName: (state, action) => {
      state.productByName = action.payload;
    },
    getProductById: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getAllProducts, getProductByName, getProductById } =
  productSlice.actions;

const productsReducer = productSlice.reducer;
export default productsReducer;
