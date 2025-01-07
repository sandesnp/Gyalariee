import Card from "./Card";

export default function SearchItems({ museumObjects }) {
  let halfSizeCounter = 0;
  return (
    <div className="search-items">
      {!museumObjects?.size ? (
        <p>Loading...</p>
      ) : (
        [...museumObjects].map((obj) => {
          if (obj.orientation === "card--portrait")
            halfSizeCounter = 3 - halfSizeCounter;
          if (obj.orientation !== "card--portrait" && halfSizeCounter > 0) {
            halfSizeCounter--;
            obj.orientation = "card--half-landscape";
          }
          return <Card key={obj.objectID} museumObject={obj} />;
        })
      )}
    </div>
  );
}
