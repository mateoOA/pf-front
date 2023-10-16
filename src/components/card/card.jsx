import "./cardStyle.css";
import { NavLink } from "react-router-dom";

export function Card({ image, title, category, price, id }) {
  
  return (
    <span className="group w-[391px] h-[673px]">
      <span href={`/product/${id}`} className=" bg-card-color">
        <NavLink to={`/Detail/${id}`}>
          <img
            src={image}
            className="object-contain h-335 w-335"
            srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
            alt="Product Image"
          />
        </NavLink>
      </span>
      <NavLink to={`/Detail/${id}`}>
        <span>
          <span>{title}</span>
        </span>
      </NavLink>
      <span>
        <span>{category}</span>
      </span>
      <span>
        <span>${price}</span>
      </span>
    </span>
  );
}
