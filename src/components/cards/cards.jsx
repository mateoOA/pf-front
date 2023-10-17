import { useState } from "react";
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
  
  // Define el estado del paginado
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Calcula el índice de inicio y final para los elementos de la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // Filtra los productos para mostrar solo los de la página actual
  const productsToShow = products.slice(startIndex, endIndex);

  return (
    <div>
      {productsToShow.map((product) => ( 
        <Card
          key={product._id}
          id={product._id}
          image={product.image ?? null}
          title={product.title}
          category={product.category}
          price={product.price}
        />
      ))}
      
      {/* Agrega los controles de paginación */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= products.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
