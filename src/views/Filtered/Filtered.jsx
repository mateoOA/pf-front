import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {} from "../../redux/actions";


export default function Filtered() {
  /*   const handleAoZ = (event) => {
    dispatch(orderAz(event.target.value));
  };

  const handleOrderPrice = (event) => {
    dispatch(filterPrice(event.target.value));
  };

  const handleFilterDiet = (event) => {
    dispatch(filterDiet(event.target.value));
  };

  const handleReset = () => {
  
    dispatch(reset());
  };  */

  return (
    <div class="flex flex-row">
      <div>
        <h3>Alphabetic</h3>
        <select name="A_Z" /*  onChange={handleAoZ} */ defaultValue="Default">
          <option value="Default">Select Order</option>
          <option value="A">A - Z</option>
          <option value="Z">Z - A</option>
        </select>
      </div>

      <div>
        <h3>Price</h3>
        <select
          name="Price"
          /* onChange={handleOrderPrice} */ defaultValue="Default"
        >
          <option value="Default">Select Price</option>
          <option value="maximum">Maximum</option>
          <option value="minimum">Minimum</option>
        </select>
      </div>

      <div>
        <h3>Category</h3>
        <select
          name="Category"
          /*  onChange={handleFilterCategory} */
          defaultValue="Default"
        >
          <option value="Default">Select Category</option>
          <option value="vegetarian">Food</option>
          <option value="vegan">Beverages</option>
        </select>
      </div>

      <div>
        <h3>Diet</h3>
        <select
          name="Diet"
          /* onChange={handleFilterDiet}  */ defaultValue="Default"
        >
          <option value="Default">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
      <button /* onClick={handleReset} */> Reset</button>
    </div>
  );
}
