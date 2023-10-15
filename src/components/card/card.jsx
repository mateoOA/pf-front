import "./cardStyle.css";
export function Card({ image, title, category, price, id }) {
  return (
    <span className="group w-[391px] h-[673px]">
      <a href={`/product/${id}`} className=" bg-card-color">
        <img
          src={image}
          className="object-contain h-335 w-335"
          srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
          alt="Product Image"
        />
      </a>
      <span>
        <span>{title}</span>
      </span>
      <span>
        <span>{category}</span>
      </span>
      <span>
        <span>${price}</span>
      </span>
    </span>
  );
}
