import axios from "axios";
import {
  getAllProducts,
  getProductByName,
  getProductById,
} from "./productSlice.js";

export const getProducts = (dispatch) => {
  axios(
    "https://pf-ab.onrender.com/products?weightMin=100&category=food&weightType=g&weightMax=400&orderBy=-price"
  )
    .then((res) => dispatch(getAllProducts(res.data.results)))
    .catch((e) => console.log(e));
};
export const getProductName = (dispatch) => {
  axios("http://localhost:3000/products")
    .then((res) => dispatch(getProductByName(res.data.results)))
    .catch((e) => console.log(e));
};
export const getProductId = (dispatch) => {
  axios("http://localhost:3000/products")
    .then((res) => dispatch(getProductById(res.data.results)))
    .catch((e) => console.log(e));
};
