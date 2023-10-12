import React from "react";

export default function Paginated({
  currentPage,
  productsPerPage,
  allProducts,
  paginated,
}) {
  const pageNumbers = [];
  for (let i = 0; i <= allProducts / productsPerPage; i++) {
    pageNumbers.push(i + 1);
  }

  const prevPage = () => {
    const newPage = currentPage - 1;
    if (newPage >= 1) {
      paginated(newPage);
      
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= pageNumbers.length && page !== currentPage) {
      paginated(page);
      
    }
  };

  return (
    <div>
      <ul>
        <button onClick={prevPage}>Prev</button>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li>
              <div>
                <a onClick={() => paginated(number)}>{number}</a>
              </div>
            </li>
          ))}

        <button
          disabled={currentPage === pageNumbers.length}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </ul>
    </div>
  );
}






/* Luego en Cards
const { products } = useSelector((state) => state);
const [currentPage, setCurrentPage] = useState(1);
const [currentCharacters, setCurrentCharacters] = useState([]);
const indexOFLastCharacter = currentPage * charactersPerPage;
const indexOfFirstCharactetr = indexOFLastCharacter - charactersPerPage;
const charactersPerPage = 8;
const dispatch = useDispatch();

useEffect(() => {
  dispatch(addDogs);
  let allCurrentCharacters = dogs?.slice(
    indexOfFirstCharactetr,
    indexOFLastCharacter
  );
  setCurrentCharacters(allCurrentCharacters);
}, [dogs, indexOfFirstCharactetr, indexOFLastCharacter]);

const paginated = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const handleDelete = (id) => {
  let updatedCharacters = currentCharacters.filter((el) => el.id != id);
  setCurrentCharacters(updatedCharacters);
};

return (
  <div>
    <div>
      <div className={style.cardsContent}>
        {currentCharacters.map( */