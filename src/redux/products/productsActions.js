import axios from "axios";

import {
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
  addProduct, 
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

export const getProductFiltered = (query) => {
  return (dispatch) => {
    console.log(query);
    axios
      .get(`https://pf-ab.onrender.com/products?${query}`)
      .then((res) => {
        dispatch(getProductsByFilter(res.data.products));

        console.log(res.data.products);
      })
      .catch((e) => console.log(e));
  };
};

export const postProduct = (product) => {
  return (dispatch) => {
    axios
      .post(`${urlDeploy}/products/add`,product)
      .then((res) => {
        dispatch(addProduct(product));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};