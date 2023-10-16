import React from "react";
import { useState } from "react";
import { getProductName } from "../../redux/products/productsActions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const searchProduct = () => {
    dispatch(getProductName(name));
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={handleChange}
        type="search"
        placeholder="Enter a product"
      />

      <button onClick={searchProduct}>Search</button>
    </div>
  );
}
