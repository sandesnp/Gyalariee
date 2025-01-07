import SearchBar from "./SearchBar";
import SearchItems from "./SearchItems";

export default function Search({ setMuseumObjects, museumObjects }) {
  return (
    <div className="search">
      <SearchBar setMuseumObjects={setMuseumObjects} />
      <SearchItems museumObjects={museumObjects} />
    </div>
  );
}
