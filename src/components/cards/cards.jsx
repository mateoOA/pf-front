import React, { useState, useEffect } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsActions"; // Importa tus acciones
import { setCurrentPage } from "../../redux/products/productSlice"; // Importa la acción setCurrentPage

export function Cards() {
  const { products, currentPage, totalPages } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const prevHandler = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const nextHandler = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  useEffect(() => {
    // Llama a la acción getProducts al montar el componente
    dispatch(getProducts());
  }, [dispatch]);

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
      
      <div>
        <input
          type="button"
          value="Prev"
          name="Prev"
          onClick={prevHandler}
          disabled={currentPage === 1}
        />
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => dispatch(setCurrentPage(page))}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <input
          type="button"
          value="Next"
          name="Next"
          onClick={nextHandler}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
}
