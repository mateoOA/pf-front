import { Card } from "../card/card";

export function Cards({ products }) {
    return (
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Card
            key={product._id.$oid}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    );
  }