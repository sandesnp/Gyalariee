import SearchBar from './SearchBar';
import SearchItems from './SearchItems';

export default function Leftwall({ setMuseumObjects, museumObjects, handleSelect, scrollRef }) {
  return (
    <div className='left-wall'>
      <SearchBar setMuseumObjects={setMuseumObjects} />
      <SearchItems
        museumObjects={museumObjects}
        handleSelect={handleSelect}
        scrollRef={scrollRef}
      />
    </div>
  );
}
