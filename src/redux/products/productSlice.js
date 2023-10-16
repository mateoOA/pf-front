import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  detail: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getAllProducts: (state = initialState, action) => {
      state.products = [...state.products, ...action.payload];
    },
    getProductByName: (state, action) => {
      state.products = [...action.payload];
    },
    getProductById: (state = initialState, action) => {
      state.detail = [...action.payload];
    },
    getProductsByFilter: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

export const {
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
} = productSlice.actions;

const productsReducer = productSlice.reducer;
export default productsReducer;
