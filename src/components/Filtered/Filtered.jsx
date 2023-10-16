import { useDispatch } from "react-redux";
import { getProductFiltered } from "../../redux/products/productsActions";
export default function Filtered() {
  const dispatch = useDispatch();

  const handleAoZ = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };

  const handleOrderPrice = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };

  const handleFilterDiet = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };

  const handleFilterCategory = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };
  const handleWeightType = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };
  const handleWeightMax = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };
  const handleWeightMin = (event) => {
    dispatch(getProductFiltered(event.target.value));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div>
        <h3>Alphabetic</h3>
        <select name="A_Z" onChange={handleAoZ} defaultValue="Default">
          <option value="Default">Select Order</option>
          <option value="A">A - Z</option>
          <option value="Z">Z - A</option>
        </select>
      </div>

      <div>
        <h3>Price</h3>
        <select name="Price" onChange={handleOrderPrice} defaultValue="Default">
          <option value="Default">Select Price</option>
          <option value="maximum">Maximum</option>
          <option value="minimum">Minimum</option>
        </select>
      </div>

      <div>
        <h3>Category</h3>
        <select
          name="Category"
          onChange={handleFilterCategory}
          defaultValue="Default"
        >
          <option value="Default">Select Category</option>
          <option value="Food">Food</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>

      <div>
        <h3>Diet</h3>
        <select name="Diet" onChange={handleFilterDiet} defaultValue="Default">
          <option value="Default">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>

      <div>
        <h3>weightType</h3>
        <select
          name="weightType"
          onChange={handleWeightType}
          defaultValue="Default"
        >
          <option value="Default">Select Category</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </div>

      <div>
        <h3>min-max size</h3>
        <input
          name="weightMin"
          onChange={handleWeightMin}
          id="weightMix"
          type="number"
          placeholder="Minimum"
        />
        <input
          name="weightMax"
          onChange={handleWeightMax}
          id="weightMax"
          type="number"
          placeholder="maximum"
        />
      </div>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
}


