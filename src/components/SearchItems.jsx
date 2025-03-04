import SearchCard from './SearchCard';

export default function SearchItems({ museumObjects, handleSelect }) {
  let halfSizeCounter = 0;
  return (
    <div className='search-items'>
      {!museumObjects?.length ? (
        <p>Loading...</p>
      ) : (
        museumObjects.map((obj) => {
          if (obj.orientation === 'card--portrait') halfSizeCounter = 3 - halfSizeCounter;
          if (obj.orientation !== 'card--portrait' && halfSizeCounter > 0) {
            halfSizeCounter--;
            obj.orientation = 'card--half-landscape';
          }
          return <SearchCard key={obj.objectID} museumObject={obj} handleSelect={handleSelect} />;
        })
      )}
    </div>
  );
}
