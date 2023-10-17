import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    detail: [],
    currentPage: 1,
    totalPages: 5,
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductByName: (state, action) => {
      state.products = action.payload;
    },
    getProductById: (state, action) => {
      state.detail = action.payload;
    },
    getProductsByFilter: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const {
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
  addProduct,
  setCurrentPage,
  setTotalPages,
} = productSlice.actions;

const productsReducer = productSlice.reducer;
export default productsReducer;
