import axios from "axios";

import {
  getAllProducts,
  getProductByName,
  getProductById,
  getProductsByFilter,
} from "./productSlice.js";

// export const getProducts = () => {
//   return (dispatch) => {
//     axios
//       .get("https://pf-ab.onrender.com/products/")
//       .then((res) => {
//         dispatch(getAllProducts(res.data.products));
//         console.log(res.data);
//       })
//       .catch((e) => console.log(e));
//   };
// };

export const getProductName = (name) => {
  return (dispatch) => {
    axios
      .get(`https://pf-ab.onrender.com/products/name?name=/${name}`)
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
      .get(`https://pf-ab.onrender.com/products/${id}`)
      .then((res) => {
        dispatch(getProductById(res.data));
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
};

export const getProducts = (
  diet,
  category,
  weigthType,
  weigthMin,
  weigthMax,
  limit = 10,
  page = 1
) => {
  return (dispatch) => {
    axios
      .get(
        `https://pf-ab.onrender.com/products/?`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(getProductsByFilter(res.data.products));
        
      })
      .catch((e) => console.log(e));
  };
};