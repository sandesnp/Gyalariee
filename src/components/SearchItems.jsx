import "../css/searchItems.css";
import CardObject from "./CardObject";

export default function SearchItems({ tmo }) {
  let halfSizeCounter = 0;
  return (
    <div className="search-items">
      {!tmo?.size ? (
        <p>Loading...</p>
      ) : (
        [...tmo].map((obj) => {
          if (obj.orientation === "portrait")
            halfSizeCounter = 3 - halfSizeCounter;
          if (obj.orientation !== "portrait" && halfSizeCounter > 0) {
            halfSizeCounter--;
            obj.orientation = "half-landscape";
          }
          return <CardObject key={obj.objectID} tmo={obj} />;
        })
      )}
    </div>
  );
}