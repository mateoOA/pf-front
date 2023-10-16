import { ADD_PRODUCT } from "./actions-types";
import axios from 'axios';




  export const addProduct = (product) => { //para agregar una nueva receta
    return async function (dispatch) {
        try {
            const response = await axios.post("mongodb+srv://guillevallejosr:gPwWuokN8zDOeuT6@cluster0.5nw8cx2.mongodb.net/henshi_fit?retryWrites=true&w=majority&appName=AtlasApp/products/add", product);
            return dispatch({ type: ADD_PRODUCT, payload: response.data }); 
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };
};