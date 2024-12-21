import "../css/searchItems.css";
import CardObject from "./CardObject";

export default function SearchItems({ tmo }) {
  return (
    <div className="search-items">
      {!tmo?.size ? (
        <p>Loading...</p>
      ) : (
        [...tmo].map((obj) => <CardObject key={obj.objectID} {...obj} />)
      )}
    </div>
  );
}
