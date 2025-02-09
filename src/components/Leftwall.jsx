import SearchBar from './SearchBar';
import SearchItems from './SearchItems';

export default function Leftwall({ setMuseumObjects, museumObjects, handleSelect }) {
  return (
    <div className='left-wall'>
      <SearchBar setMuseumObjects={setMuseumObjects} />
      <SearchItems museumObjects={museumObjects} handleSelect={handleSelect} />
    </div>
  );
}
