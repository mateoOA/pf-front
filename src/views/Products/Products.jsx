import Filtered from "../../components/Filtered/Filtered";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Cards } from "../../components/cards/cards";

export default function Products() {
  return (
    <div>
      <SearchBar />
      <Filtered />
      <Cards />
    </div>
  );
}
