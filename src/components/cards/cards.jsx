import { Card } from "../card/card";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { products } = useSelector((state) => state.products);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <Card
          key={product._id}
          id={product._id}
          image={product.image ?? null}
          title={product.title}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
}
