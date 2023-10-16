import axios from "axios";

import {
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
} from "./productSlice.js";

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/products/")
      .then((res) => {
        dispatch(getAllProducts(res.data.products));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const getProductName = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/products/name?name=${name}`)
      .then((res) => {
        dispatch(getProductByName(res.data));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const getProductId = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        dispatch(getProductById(res.data));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};



export const getProductFiltered = (
  diet,
  category,
  weigthType,
  weigthMin,
  weigthMax,
  limit,
  page,
) => {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:3001/products/?limit=${limit}&page=${page}diet=${diet}&category=${category}&weigthType=${weigthType}&weigthMin=${weigthMin}&weightMax=${weigthMax}`
      )
      .then((res) => {
        dispatch(getProductsByFilter(res.data));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};
