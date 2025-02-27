import SearchBar from './SearchBar';
import SearchItems from './SearchItems';

export default function Leftwall({ setMuseumObjects, museumObjects, handleSelect, wallToggleRef }) {
  return (
    <div className='left-wall' ref={wallToggleRef}>
      <SearchBar setMuseumObjects={setMuseumObjects} />
      <SearchItems museumObjects={museumObjects} handleSelect={handleSelect} />
    </div>
  );
}
